const readline = require("readline");
const fs = require("fs").promises;
const path = require("path")
const ytdl = require("ytdl-core");
const ffmpeg = require("fluent-ffmpeg");
const { Command } = require("commander");

const convertIntoValidFilename = (name) => {
    return (name.replace(/[\/|\\:*?"<>]/g, " "));
}

const downloadYtVideoToMp3 = (url, i) => {
    ytdl.getBasicInfo(url)
        .then(info => {
            let stream = ytdl(url, { quality: "highestaudio" });
            let start = Date.now();
            const title = info.videoDetails.title;
            ffmpeg(stream)
                .audioBitrate(128)
                .save(path.join(process.cwd(), convertIntoValidFilename(`${title}.mp3`)))
                .on("progress", p => {
                    console.log(`Downloading ${title}`);
                })
                .on("end", () => {
                    console.log(`\n${i}. ${title} Finished downloading in ${Date.now() - start}\n`);
                });
        })
        .catch(reason => {
            console.error(reason);
        })
}

const program = new Command();

program
    .name("ytmp3")
    .description("Command line application for downloading youtube videos into mp3 file")
    .version("Beta 0.1")
    .option("-f, --file <string>", "Source filename default to playlist.txt in current directory if any", "playlist.txt")
    .option("-o, --output <string>", "Output directory default to current directory", process.cwd())
    .action(async (options) => {
        const file = options.file;
        const output = options.output;
        let data;
        try {
            data = await fs.readFile(path.join(process.cwd(), file), "utf-8");
        } catch(error) {
            console.log(`ERROR: ${error}`);
        }
        data = data.split("\n");
        data.forEach(async (url, i) => await downloadYtVideoToMp3(url, i));
    })

program.command("download")
    .description("Download from a single url")
    .argument("<string>", "The URL")
    .action(url => downloadYtVideoToMp3(url, 1));

program.parse(process.argv);