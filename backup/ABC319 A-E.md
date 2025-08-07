### A
map.
### B
emulate.
### C
$9! = 362800$，不是很大，枚举所有可能的观察序列然后 check。

具体来说打个时间戳然后挨个检查是否出现了题中的情况。
```cpp
// Enonya

#include <bits/stdc++.h>
using namespace std;

int a[10], od[10], vis[4][4];
vector<pair<int, int>> v;
int id(int x, int y) {
	return (y + (x - 1) * 3);
}

int main() {
	
	v.clear(), v.push_back({0, 0});
	for(int i = 1; i <= 9; ++i) od[i] = i;
	for(int i = 1; i <= 3; ++i) {
		for(int j = 1; j <= 3; ++j) {
			cin >> a[id(i, j)];
			v.push_back({i, j});
		}
	}

	int ans = 0, cur = 0;
	do {
		++cur;
		for(int i = 1; i <= 9; ++i) {
			int x = v[od[i]].first, y = v[od[i]].second;
			vis[x][y] = i;
		}

		bool flag = false;
		for(int i = 1; i <= 3; ++i) {
			int mx = max(vis[i][1], max(vis[i][2], vis[i][3]));
			if(a[id(i, 1)] == a[id(i, 2)]) {
				if(vis[i][3] == mx) {
					flag = true; break;
				}
			}
			if(a[id(i, 2)] == a[id(i, 3)]) {
				if(vis[i][1] == mx) {
					flag = true; break;
				}
			}	
			if(a[id(i, 3)] == a[id(i, 1)]) {
				if(vis[i][2] == mx) {
					flag = true; break;
				}
			}
		}
		for(int j = 1; j <= 3; ++j) {
			int mx = max(vis[1][j], max(vis[2][j], vis[3][j]));
			if(a[id(1, j)] == a[id(2, j)]) {
				if(mx == vis[3][j]) {
					flag = true; break;
				}
			}
			if(a[id(2, j)] == a[id(3, j)]) {
				if(mx == vis[1][j]) {
					flag = true; break;
				}	
			}
			if(a[id(3, j)] == a[id(1, j)]) {
				if(mx == vis[2][j]) {
					flag = true; break;
				}
			}
		}

		int mx = max(vis[1][1], max(vis[2][2], vis[3][3]));
		if(a[id(1, 1)] == a[id(2, 2)] && vis[3][3] == mx) flag = true;
		if(a[id(2, 2)] == a[id(3, 3)] && vis[1][1] == mx) flag = true;
		if(a[id(3, 3)] == a[id(1, 1)] && vis[2][2] == mx) flag = true;

		mx = max(vis[1][3], max(vis[2][2], vis[3][1]));
		if(a[id(1, 3)] == a[id(2, 2)] && vis[3][1] == mx) flag = true;
		if(a[id(2, 2)] == a[id(3, 1)] && vis[1][3] == mx) flag = true;
		if(a[id(3, 1)] == a[id(1, 3)] && vis[2][2] == mx) flag = true;

		if(flag == true) ans++;
	} while(next_permutation(od + 1, od + 10));

	ans = cur - ans;
	cout << fixed << setprecision(10) << (long double)ans / (long double)cur << endl;

	return 0;
}
```
看官方题解有更快一点的写法，就是存一个 `vector<array<int, 3>>` 表示一下每一行每一列还有对角线的一维坐标，这样子能大幅减少代码量。

做的时候第一次没读懂题的意思就开做然后写错，写代码的时候 `od[i]` 错写成 `i`，甚至最后才发现概率是 `without disappointment`...

哎复健

### D
手玩一下立马可以发现答案具有单调性，注意到答案的范围 $10^9$，但是判定的复杂度可以是 $O(n)$ 的，所以二分答案。

可行区间在左边，写二分主体的时候要注意一下：
```cpp
// Enonya

#include <bits/stdc++.h>
using namespace std;

#define int long long

const int si = 2e5 + 10;
const int inf = 1e18;
int n, m, a[si], s[si];

int leng(int l, int r) {
	if(l > r) return inf;
	return (s[r] - s[l - 1]) + (r - l);	
}
bool valid(int v) {
	int l = 1, r = 1, tot = 0;
	while(l <= r && r <= n) {
		if(leng(l, r) > v) return false;
		if(leng(l, r + 1) > v) {
			tot++, l = r + 1, r = r + 1;
		}
		else r++;
	}
	return tot <= m;
}

signed main() {
	
	cin >> n >> m, s[0] = 0;
	for(int i = 1; i <= n; ++i) {
		cin >> a[i], s[i] = s[i - 1] + a[i];
	}
	s[n + 1] = inf;

	int ans = 0;
	int l = 1, r = inf, mid;
	while(l < r) {
		mid = (l + r) >> 1;
		if(valid(mid)) r = mid, ans = mid;
		else l = mid + 1;
	}

	cout << ans << endl;

	return 0;
}
```
`l + r >> 1` 的话永远不会取到 $r$ 的初值所以一般是将 $r$ 设置为真实上界 + 1 以判定无解，自然适用于可行区间在左的情况

`(l + r + 1) >> 1` 则永远不会取到 $l$ 的初值。

记得开一下 `long long`。
### E
咕咕咕。