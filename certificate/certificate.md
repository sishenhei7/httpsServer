## 生成本地证书

首先，安装mkcert

```
brew install mkcert
```

然后我们用mkcert生成本地证书。

```
mkcert localhost 127.0.0.1 ::1
```

上面的代码意思是说，给localhost，127.0.0.1和::1这三个域名生成证书。

然后我们可以在文件夹下面看到2个文件：

```
秘钥：example.com+3-key.pem
公钥：example.com+3.pem
```

我们在钥匙串里面把公钥添加信任。方法可参考：[在Vue里用Service Worker来搞个中间层（React同理）](https://www.colabug.com/3479278.html)