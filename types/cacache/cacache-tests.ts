import * as cacache from "cacache";
import * as fs from "fs";

const cachePath = "";

cacache.ls(cachePath).then(() => {});

cacache.ls.stream(cachePath).on("data", data => {
    data; // $ExpectType any
});

cacache.get(cachePath, "my-thing", { memoize: true }).then(() => {});

cacache.get(cachePath, "my-thing", { memoize: new Map() }).then(() => {});

cacache.get.byDigest(cachePath, "sha512-BaSe64HaSh").then(() => {});

cacache.get
    .stream(cachePath, "my-thing")
    .on("metadata", metadata => {
        metadata; // $ExpectType any
    })
    .on("integrity", integrity => {
        integrity; // $ExpectType any
    })
    .pipe(fs.createWriteStream("./x.tgz"));

cacache.get.stream.byDigest(cachePath, "sha512-SoMeDIGest+64==").pipe(fs.createWriteStream("./x.tgz"));

cacache.get.info(cachePath, "my-thing").then(() => {});

cacache.get.hasContent(cachePath, "sha521-NOT+IN/CACHE==").then(() => {});

cacache
    .put(cachePath, "registry.npmjs.org|cacache@1.0.0", Buffer.from([]), {
        tmpPrefix: "tmp-",
        memoize: true,
    })
    .then(integrity => {
        integrity; // $ExpectType string
    });

fs.createReadStream("").pipe(
    cacache.put
        .stream(cachePath, "registry.npmjs.org|cacache@1.0.0")
        .on("integrity", d => console.log(`integrity digest is ${d}`)),
);

cacache.rm.all(cachePath).then(() => {
    // ...
});

cacache.rm.entry(cachePath, "my-thing").then(() => {
    // ...
});

cacache.rm.content(cachePath, "sha512-SoMeDIGest/IN+BaSE64==").then(() => {
    console.log("data for my-thing is gone!");
});

cacache.tmp
    .mkdir(cachePath, {
        concurrency: 10,
        filter: false,
        log: { silly: () => {} },
        tmpPrefix: "tmp-",
    })
    .then(dir => {
        dir; // $ExpectType string
        // ...
    });

cacache.tmp
    .mkdir(cachePath, {
        concurrency: 10,
        filter: false,
        log: { silly: () => {} },
        tmpPrefix: "tmp-",
    })
    .then(dir => {
        dir; // $ExpectType string
        cacache.tmp.fix(cachePath).then(() => {
            // ...
        });
    });

cacache.tmp.withTmp(
    cachePath,
    {
        concurrency: 10,
        filter: false,
        log: { silly: () => {} },
        tmpPrefix: "tmp-",
    },
    dir => {
        dir; // $ExpectType string
    },
);

cacache
    .verify(cachePath, {
        concurrency: 10,
        filter: false,
        log: { silly: () => {} },
    })
    .then(stats => {
        console.log("cache is much nicer now! stats:", stats);
    });

cacache.verify(cachePath).then(() => {
    cacache.verify.lastRun(cachePath).then(lastTime => {
        console.log("cacache.verify was last called on" + lastTime);
    });
});

cacache.index.insert(cachePath, "registry.npmjs.org|cacache@1.0.0", "sha512-BaSe64HaSh").then((entry) => {
    entry; // $ExpectType CacheObject
});

cacache.index.compact(cachePath, "registry.npmjs.org|cacache@1.0.0", (_a, _b) => true).then((entries) => {
    entries; // $ExpectType CacheObject[]
});
