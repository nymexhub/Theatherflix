const { FuseBox, WebIndexPlugin } = require("fuse-box");
onst fuse = FuseBox.init({
    homeDir : "public",
    target : 'browser@es6',
    output : "public/$name.js",
    useTypescriptCompiler : true,
});
fuse.bundle("app")
    .instructions(" > index.js").hmr().watch()
fuse.run();