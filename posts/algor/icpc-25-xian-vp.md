## ICPC Asia Reginal Xi'an 2025 VP

好像要上 Ucup 所以这个先暂时不发。

没开 `#define int long long` 和 `sync_with_stdio(false)` 导致罚时 +5

还有 `#define endl \`\n\`` 也给我忘记了

没想清楚简单题做法导致前三个小时没过题，甲级战犯。

哎还是水平太低导致的。

怎么首字母还和题号对应上了。

### F - Follow the Penguins

直接嗯做显然会因为时序性没法好好处理而感到头疼。

由于每一只企鹅的移速都是 0.5，那么显然会有以下的三种情况：

1. $i, t_i$ 此时同向，$i$ 相对于 $t_i$ 的速度就是 $0$
2. $i, t_i$ 此时反向，$i$ 相对于 $t_i$ 的速度就是 $1$
3. $t_i$ 此时已经停下，$i$ 相对于 $t_i$ 的速度是 $0.5$

追上的情况只有 2 和 3。

1 可以进化为 3。

2 也可以退化为 3。

所以 1 就暂时不需要考虑，对于 2，3 两种情况来说，最麻烦的是如何处理这个时序关系。

不妨假设每个企鹅和作为他人目标的自己本身完全独立，那么我们可以对于每个企鹅算出它找到 $t_i$ 所需要经过的时间 $m_i$。

显然最小的那个 $m_i$ 一定不会受到干扰。所以我们不妨每次只维护 $m_i$ 最小的 $(i, t_i)$，更新答案之后将 $\forall j \text{ s.t. } t_j = i$ 全部变为情况 $3$。

这个过程只需要使用两个堆维护就行（注意从 2 丢到 3 的时候 $m$ 会发生改变）。

但在修改这一步需要注意，直接找到 $j$ 然后把它从堆里面删掉可能会对复杂度造成影响，我们需要打个标记。

考虑我们每次从堆头取出的元素 $k$。

考虑一下，当我们记录这个 $k$ 的答案的时候，能够对它产生影响的情况。

如果 $k$ 是 2，那么有两种可能：

1. 就是直接面对面撞上的，$ans_k = m_k$。
2. 其实 $t_k$ 已经停下了，换句话说 $k$ 已经被丢进 3 了，不记录答案直接跳过。

如果 $k$ 是 3。
1. 确实就是直接追上停了的 $t_k$，这样的情况可能由 1，2 发展而来，需要在它追到 $t_k$ 的基础上加上 $t_k$ 的停止时间，不过计算方式略有不同。
2. 它已经在 2 中计算完答案，但是它的 $t_i$ 更晚停下时我们把它扔进了 3。

实际实现为了方便，每个堆里面记录的是距离，和上面有点区别。

队友用的是连边暴力拆环的做法，我不会。

我觉得这个做法看起来比较正确，但是还没调过，由于时间关系先把代码放这里之后再调。

```cpp

#include <bits/stdc++.h>

using namespace std;

#define endl '\n'
#define int long long 

const int si = 5e5 + 10;
const int inf = 1e9 + 7;

int n, a[si], t[si];
int ans[si], dir[si];
bool vis[si], case1[si];

struct Node {
	int id, d;
	bool operator < (const Node &b) const {
		return d > b.d;
	}
};
std::vector<int> to[si];
std::priority_queue<Node> q2, q3;

signed main() {

	cin.tie(0) -> sync_with_stdio(false);
	cout.tie(0);

	cin >> n;
	for(int i = 1; i <= n; ++i) 
		cin >> t[i], to[t[i]].push_back(i);
	for(int i = 1; i <= n; ++i) cin >> a[i];

	for(int i = 1; i <= n; ++i) {
		if(a[t[i]] > a[i]) dir[i] = 0;
		else dir[i] = 1;
		case1[i] = false;
	}
	for(int i = 1; i <= n; ++i) {
		if(dir[i] != dir[t[i]]) {
			q2.push((Node){i, abs(a[i] - a[t[i]])});
		}
		else case1[i] = true;
		vis[i] = false; // 是否已经被丢入了 3
	}

	while(!q2.empty() || !q3.empty()) {
		int t2, t3;
		if(q2.empty()) t2 = inf;
		else t2 = q2.top().d;
		if(q3.empty()) t3 = inf;
		else t3 = q3.top().d * 2;
	
		if(t2 < t3) {
			auto [i, d] = q2.top();
			q2.pop();
			if(vis[i] || ans[t[i]] != 0) continue;

			ans[i] = d;
			for(auto x : to[i]) {
				vis[x] = true;
				q3.push((Node){x, abs(a[x] - a[i])});
			}
		}
		else {
			auto [i, d] = q3.top();
			q3.pop();
			if(ans[i] != 0) continue;

			if(case1[i] == true) 
				ans[i] = d * 2 + ans[t[i]];
			else ans[i] = d + (d - ans[t[i]]);

			for(auto x : to[i]) {
				vis[x] = true;
				q3.push((Node){x, abs(a[x] - a[i])});
			}
		}
	}

	for(int i = 1; i <= n; ++i) cout << ans[i] << " ";
	cout << endl;

	return 0;
}
```

### G - Grand Voting

好像是签到题，就不补了。

### I - Imagined Holly

一个想法是不妨假设所有 $a(u, v) = u \text{ xor } v$ 都存在一条 $(u, v)$ 边，显然所有的“边”中存在一些“路径”。

我们要做的就是把这些路径 $(u, v)$ 找出来。

换句话说我们希望在 $(u, v)$ 当中能够至少再插入一个点。

随便插入一个点 $w$ 看看，此时如果需要满足条件，那么 $a(u, w) = u$，并且如果我们插入更多点，能够有比较特殊性质的就是 $w$ 这个点。

所以我们考虑从它入手。

我们对于所有 $k \text{ s.t. } a(w, k) = w \text{ xor } k$。

显然它们之间一定至少存在一条边，再不济也是一条路径，

如果这个路径/边不经过 $u$，此时由于 $w$ 的性质 $a(u, k) = u \text{ xor } k$，并且 $u, k$ 没有直接连边，那么这条路径就可以被删去。

如果经过 $u$，由于 $a(u, w) = a(w, u)$，仍旧是一样的。

并且只要是没有和 $u$ 直接连边的 $k$，它们之间一定存在一个 $u$，否则就一定有直接连边。

所以我们只需要重复执行上面的删路径操作就可以找到原来的这棵树。

时间复杂度看起来比较像 $O(n^2\log n)$，但是我不会证。

vp 的时候急眼了直接写，可能给它草过去了，我希望是正解。

```cpp
#include <bits/stdc++.h>

#define int long long
using namespace std;

const int si = 2e3 + 10;

int n, a[si][si];
std::set<int> Z[si], N[si];

signed main() {
	ios::sync_with_stdio(false);
	cin.tie(0);
	cin >> n;
	for(int i = 1; i <= n; ++i) {
		for(int j = i; j <= n; ++j) {
			cin >> a[i][j], a[j][i] = a[i][j];
		}
	}
	
	for(int i = 1; i <= n; ++i) {
		for(int j = i + 1; j <= n; ++j) {
			if(a[i][j] == (i xor j)) {
				N[i].insert(j), N[j].insert(i);
			}
		}
	}
	
	for(int i = 1; i <= n; ++i) {
		for(int j = 1; j <= n; ++j) {
			if(a[i][j] == i && j != i) Z[i].insert(j);
		}
	}
	
	for(int u = 1; u <= n; ++u) {
		for(auto i : Z[u]) {
			for(auto j : N[i]) {
				N[u].erase(j);
			}
		}
	}
	for(int i = 1; i <= n; ++i) {
		for(auto j : N[i]) {
			if(i != j && i < j) cout << i << " " << j << endl;
		}
	}
	
	return 0;
}
```

### J - January's Color

### L - Let's Make a Convex!

考虑在一个已有多边形的基础上加入一条边。

不难发现只需要新边严格小于其它已有边的和就行。

然后先对边排序，从 $len = 3$ 开始做一个双指针。

但是很快能发现并不一定满足单调性：

因为一个 $n = 4$ 的合法区间并不一定包含一个 $n = 3$ 的合法区间。

类似于 `100 100 400 605`。

所以只能令寻出路。

但是我们注意到 $n = k$ 的合法区间一定能扩展出 $n > k$ 的合法区间。

所以我们不妨考虑对每个位置二分最小的合法区间，然后更新答案。
```cpp
#include <bits/stdc++.h>

#define int long long

using namespace std;

const int si = 2e5 + 10;

int n, a[si], sum[si], ans[si];

int ask(int l, int r) { return sum[r] - sum[l - 1]; }
bool valid(int l, int r, int mx) {
    return ask(l, r - 1) > mx && l >= 1 && r <= n;
}
int sear(int pos) {
    int l = 3, r = pos + 1;
    while(l < r) {
        int mid = (l + r) >> 1;
        if(valid(pos - mid + 1, pos, a[pos])) 
            r = mid;
        else l = mid + 1;
    }
    if(l <= pos) return l;
    else return -1;
}
void solve(int n) {
    for(int i = 1; i <= n; ++i) ans[i] = 0;
    int t = n + 1; // 注意这个地方如果写成 n 复杂度就不对了
    for(int i = n; i >= 3; --i) {
        int len = sear(i);
		// cout << "len at " << i << " = " << len << endl;
        if(len == -1) continue;
		if(len >= t) continue;	
		for(int j = len; i - j + 1 >= 1; ++j) {
			ans[j] = max(ans[j], ask(i - j + 1, i));
		}
		t = len;
    }
}

signed main() {
    cin.tie(0) -> sync_with_stdio(false);
    cout.tie(0);

    int T; cin >> T;
    while(T--) {
        cin >> n;
        sum[0] = 0;
        for(int i = 1; i <= n; ++i) cin >> a[i];
        sort(a + 1, a + 1 + n);
        for(int i = 1; i <= n; ++i)
        sum[i] = sum[i - 1] + a[i];
        solve(n);
        for(int i = 1; i <= n; ++i) cout << ans[i] << " ";
        cout << endl;
    }
    return 0;
}
```
