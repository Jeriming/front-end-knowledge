[返回](./#/html/)

空元素（empty element）可能是 HTML，SVG，或者 MathML 里的一个不可能存在子节点（例如内嵌的元素或者元素内的文本）的element。

HTML，SVG 和 MathML 的规范都详细定义了每个元素能包含的具体内容（define very precisely what each element can contain）。许多组合是没有任何语义含义的，比如一个 <audio> 元素嵌套在一个 <hr> 元素里。

在 HTML 中，通常在一个空元素上使用一个闭标签是无效的。例如， 

```html
<input type="text"></input>
```

的闭标签是无效的 HTML。

在 HTML 中有以下这些空元素：

```html
<area>
<base>
<br>
<col>
<colgroup> when the span is present
<command>
<embed>
<hr>
<img>
<input>
<keygen>
<link>
<meta>
<param>
<source>
<track>
<wbr>
```

[返回](./#/html/)