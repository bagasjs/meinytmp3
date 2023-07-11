# MEINYTMP3
This is my simple youtube mp3 downloader. I'm usually addicted to some music in a certain period. Unfortunately if I have to use YouTube (because YouTube is basically a free music provider) it is very limited, especially on the Android application where we must always be on the YouTube application itself so that we can still listen to the music. Therefore I am usually forced to download these songs. It's just that sometimes it's very inconvenient to download all the music with third-party applications (usually website-based). That's why I built this thing and also of course since It's very easy to create, I think there's no reason not to.

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
