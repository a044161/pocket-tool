<!-- TOC -->

- [pocket-tool](#pocket-tool)
    - [功能](#功能)
    - [功能点](#功能点)
        - [utils](#utils)
        - [dom](#dom)
    - [调用方式](#调用方式)
    - [API](#api)
        - [Utils.isUndefined(obj)](#utilsisundefinedobj)
        - [Utils.isNull(obj)](#utilsisnullobj)
        - [Utils.isObject(obj)](#utilsisobjectobj)
        - [Utils.isArray(obj)](#utilsisarrayobj)
        - [Utils.isFunction(obj)](#utilsisfunctionobj)
        - [Utils.isString(obj)](#utilsisstringobj)
        - [Utils.merge(obj,[obj...])](#utilsmergeobjobj)
        - [DOM.getElement(tag)](#domgetelementtag)
        - [DOM.addClass(element, className)](#domaddclasselement-classname)
        - [DOM.removeClass(element, className)](#domremoveclasselement-classname)
        - [DOM.on(element, event, handler)](#domonelement-event-handler)
        - [DOM.off(element, event, handler)](#domoffelement-event-handler)
        - [DOM.getDataSet(element, key)](#domgetdatasetelement-key)
    - [DOM 支持链式调用](#dom-支持链式调用)
    - [Feture](#feture)

<!-- /TOC -->

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
5. isFunction - 判断是否为函数
6. isString - 判断是否为字符串
7. merge - 合并对象

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

### Utils.isFunction(obj)

判断是否为函数  

**参数**  

1. obj (*string*|*number*|*array*|*object*|*boolean*) - 想要判断的对象

**返回值**

`true` or `false`  

**例子** 
```
Utils.isFunction('1');
// return: false
```

### Utils.isString(obj)

判断是否为字符串  

**参数**  

1. obj (*string*|*number*|*array*|*object*|*boolean*) - 想要判断的对象

**返回值**

`true` or `false`  

**例子** 
```
Utils.iString('1');
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
DOM.getDataSet(div, 'data');
// return: 1
```
**返回值**  

具体data的值，若为数据或对象，则会进行转换

## DOM 支持链式调用

`addClass`、`removeClass`、`on`、`off`、`getDataSet`均支持链式操作

**例子** 

```
// index.html
<div class="a-div"></div>

// app.js
const getElment = DOM.getElement;

getElment('.a-div').addClass('a-div-new');

// <div class="a-div a-div-new"></div>
```

## Feture

- [x] 增加DOM部分的单元测试
- [x] 增加DOM部分的链式调用
- [x] 增加单元测试覆盖率的统计(Utils部分)
- [ ] 增加单元测试覆盖率的统计(DOM部分)
- [ ] 增加数组拼接、增强对象合并的功能、对象根据字符串获取相对应的值、增加NaN类型判断、增加Number类型判断、增加数组对比、增加对象对比