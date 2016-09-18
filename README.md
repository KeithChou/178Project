# 178Project

总结一下自己的对于178项目的过程和所用到的东西。

1.[index,signup,login].html页面使用的都是CSS3中的flexbox盒模型，自适应屏幕的宽度。
2.使用text-align:center让w所有div元素水平居中对齐。
3.引用了jquery框架，并且使用了jquery框架的jquery.validate.js来在页面做一些前端验证。


在178项目中遇到的问题
1.原本打算使用gulp前端自动化工具来压缩打包html,css,图片，js文件的，可是在打包之后把html,css,img,js分别放在dist,dist/css,dist/images,dist/js文件目录下，
可是，出现了一个问题。gulp并没有帮我修改压缩后的文件的图片，js文件，css文件的引用路径。也就是说，引用的还是压缩前使用的路径。
所以，我做了一些最傻的行为，手动去修改各个文件的路径。- - ！。我觉得最大的可能是gulpfile.js配置文件出现了问题。
2.在我写完整个页面之后，突然想起来要对所有图片进行整合处理，也就是让所有图片合成一张图片，减少http请求。可是我在使用compass中sprites modules的时候，
发现了一个问题。就是，compass合成的图片的文件路径不对。导致了在页面上无法显示图片。我尝试过j引入gulp-rev-collector插件，可是也没有效果。
具体原因我还要去寻找。

先把问题放在这里，以便下次要解决的时候方便查看。
