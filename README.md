# WXDemo

> WXDemo

## getting start

```bash
npm install
```

## file structure

* `src/*`: all source code
* `app.js`: entrance of the Weex page
* `build/*`: some build scripts
* `dist/*`: where places generated code
* `assets/*`: some assets for Web preview
* `index.html`: a page with Web preview and qrcode of Weex js bundle
* `weex.html`: Web render
* `.babelrc`: babel config (preset-2015 by default)
* `.eslintrc`: eslint config (standard by default)

## npm scripts

```bash
# build both two js bundles for Weex and Web
npm run build

# build the two js bundles and watch file changes
npm run dev

# start a Web server at 8080 port
npm run serve

# start weex-devtool for debugging with native
npm run debug
```

## notes

You can config more babel, ESLint and PostCSS plugins in `webpack.config.js`.

## 全局事件系统
mixins/index.js中定义的全局事件对象（其实是Vue实例）
```
// 触发组件 A 中的事件
bus.$emit('id-selected', 1)

// 在组件 B 创建的钩子中监听事件
bus.$on('id-selected', function (id) {
  // ...
})

```

## 如何实现热更新
在app启动页（启动页需要使用原生实现？），请求服务器，获取所有的静态资源，并保存，通过请求到的静态资源启动app

1. 构建时，生成一个assets-map文件（文件名：md5映射表），
1. app启动时，携带assets-map内容发送请求
1. 服务器根据assets-map内容判断是否需要跟新静态文件
1. app下载所有新的assets文件之后，根据assets文件启动app

1. 下载文件，保存到指定目录，android ios h5

## 问题

1. font-icon 是否可以使用？
1. 如何使用本地图片？需要自己实现ImageAdapter


1. android 中v-show 不可用？