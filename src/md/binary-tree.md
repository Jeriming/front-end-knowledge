[返回](./#/algorithm/)

### 二叉树的先序、中序、后序

牢记一点：
先序遍历：值按照 根节点->左节点->右节点 的顺序的遍历
中序遍历：值按照 左节点->根节点->右节点 的顺序的遍历
后序遍历：值按照 左节点->右节点->根节点 的顺序的遍历

先中后是根据根节点的输出顺序决定的

先序：

```javascript
function preorderTraversal(root) {
  // write code here
  const arr = [];
  return preSort(arr, root);
}
function preSort(arr, root) {
  if (!root) return arr;
  arr.push(root.val);
  preSort(arr, root.left);
  preSort(arr, root.right);
  return arr;
}
```

中序：

```javascript
function inorderTraversal(root) {
  // write code here
  const arr = [];
  function centerSort(root) {
    if (!root) return arr;
    centerSort(root.left);
    arr.push(root.val);
    centerSort(root.right);
    return arr;
  }
  return centerSort(root);
}
```

后序：

```javascript
function postorderTraversal(root) {
  // write code here
  const arr = [];
  function lastSort(root) {
    if (root === null) return arr;
    lastSort(root.left);
    lastSort(root.right);
    arr.push(root.val);
    return arr;
  }
  return lastSort(root);
}
```

[返回](./#/algorithm/)
