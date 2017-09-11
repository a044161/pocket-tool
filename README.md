[TOC]

# pocket-tool

自己用的一些工具包集合


## 功能

1. util - 常用的工具函数
2. dom - 常用的`dom`操作

## 功能点

### utils

1. isUndefined - 判断是否为undefined
2. isNull - 判断是否为null
3. isObject - 判断是否为对象
4. isArray - 判断是否为数组
5. merge - 合并对象

### dom

1. getElement - 获取dom元素
2. addClass - 增加类名
3. removeClass - 删除类名
4. on - 增加事件监听器
5. off - 移除事件监听器
6. getDataSet - 获取dataset

## 调用方式

可以通过 `npm` 方式安装
```
npm install pocket-tools --save

// app.js
import PTool from 'pocket-tools';
// or
import { Utils,Dom } from 'pocket-tools';
```

## API

### Utils.isUndefined(obj)

判断是否为undefined  

**参数**  

1. obj (*string*|*number*|*array*|*object*|*boolean*) - 想要判断的对象

**返回值**

`true` or `false`

**例子** 
```
Utils.isUndeFined('1');
// return: false
```

### Utils.isNull(obj)

判断是否为null  

**参数**  

1. obj (*string*|*number*|*array*|*object*|*boolean*) - 想要判断的对象

**返回值**

`true` or `false`

**例子** 
```
Utils.isNull('1');
// return: false
```

### Utils.isObject(obj)

判断是否为对象  

**参数**  

1. obj (*string*|*number*|*array*|*object*|*boolean*) - 想要判断的对象

**返回值**

`true` or `false`

**例子** 
```
Utils.isObject('1');
// return: false
```

### Utils.isArray(obj)

判断是否为数组  

**参数**  

1. obj (*string*|*number*|*array*|*object*|*boolean*) - 想要判断的对象

**返回值**

`true` or `false`  

**例子** 
```
Utils.isArray('1');
// return: false
```

### Utils.merge(obj,[obj...])

合并数组

**参数**  

1. obj (*object*) - 传入想要合并的多个对象

**返回值**  

新的数组对象

**例子** 
```
Utils.isArray({a:1},{b:1});
// return: {a:1,b:1}
```

### DOM.getElement(tag)

获取dom元素

**参数**  

1. tag (*string*) - 传入想要获取的dom元素，比如 '#id','.class'

**返回值** 

获取到的dom对象  

**例子** 

```
// index.html
<div class="a-div"></div>

// app.js
DOM.getElement('.a-div');
// return [HTMLCollection]
```

### DOM.addClass(element, className)

增加类名

**参数**  

1. element (*object*) - 传入dom节点
2. className (*string*) - 传入想要添加的类名，可用空格隔开，'class1 class2'

**例子** 

```
// index.html
<div class="a-div"></div>

// app.js
const div = DOM.getElement('.a-div');
DOM.addClass(div, 'class1 class2');
// <div class="a-div class1 class2"></div>
```

### DOM.removeClass(element, className)

删除类名

**参数**  

1. element (*object*) - 传入dom节点
2. className (*string*) - 传入想要删除的类名，可用空格隔开，'class1 class2'

**例子** 

```
// index.html
<div class="a-div class1 class2"></div>

// app.js
const div = DOM.getElement('.a-div');
DOM.removeClass(div, 'class1 class2');
// <div class="a-div"></div>
```

### DOM.on(element, event, handler)

增加事件监听器

**参数**  

1. element (*object*) - 传入dom节点
2. event (*string*) - 传入想要监听的事件，例如:'click'
3. handle (*function*) - 传入回调函数

**例子** 

```
// index.html
<div class="a-div"></div>

// app.js
const div = DOM.getElement('.a-div');
DOM.on(div, 'click', fn);
```

### DOM.off(element, event, handler)

移除事件监听器

**参数**  

1. element (*object*) - 传入dom节点
2. event (*string*) - 传入想要移除的监听事件，例如:'click'
3. handle (*function*) - 传入回调函数

**例子** 

```
// index.html
<div class="a-div"></div>

// app.js
const div = DOM.getElement('.a-div');
DOM.on(div, 'click', fn);
DOM.off(div, 'click', fn);
```

### DOM.getDataSet(element, key)

获取dataset

**参数**  

1. element (*object*) - 传入dom节点
2. key (*string*) - 传入data-set的key

**例子** 

```
// index.html
<div class="a-div" data="1"></div>

// app.js
const div = DOM.getElement('.a-div');
DOM.getDataSetn(div, 'data');
// return: 1
```
**返回值**  

具体data的值，若为数据或对象，则会进行转换

## Feture

* 增加DOM部分的单元测试
* 增加单元测试覆盖率的统计
* 增加开发模式