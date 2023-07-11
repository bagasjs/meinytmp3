# MEINYTMP3
My dead simple youtube to mp3 downloader.

## Download
You could download [in the latest release page](https://github.com/bagasjs/meinytmp3/releases)

## How to build by my self?
Just run this command in your terminal
```console
npm run build
```

## How to use it?
- If you just want to download from a single URL, you can do
```console
ytmp3 download <url>
```
- Or, if you want to download from a bunch of URLs, you can do
```console
ytmp3 --output <output-dir> --file <source-file>

// or you can just run
ytmp3 -o <output-dir> -f <source-file>
```

- If you're to lazy to enter the output directory and the source file. The default source file will be a file which name is **"playlist.txt"** and the default output directory by default is your current working directory.
```console
ytmp3 // so you could just run this instead
```
