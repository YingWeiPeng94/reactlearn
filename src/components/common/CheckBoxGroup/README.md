属性
一组多选框，有多少个多选框，不知道，爱好可能有5个可能有十个，数据量是不一定的
1，datas：一个数组，数组每一项是一个对象，对应一个多选框
    1，对象具有value和text属性
    2，value：多选框的值
    3，text：多选框的文本
```js
datas = [
    {value:"football",text:"足球"},
    {value:"basketball",text:"篮球"},
    {value:"movie",text:"电影"}
]
```
2，name:每一个多选框的那么属性值
3,chosseDatas:数组，表示当前选中的value值
4，onchange:当选中项发生改变时的事件