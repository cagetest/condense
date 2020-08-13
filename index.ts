import * as fs from "fs"
import * as path from "path"

type Provider = string
type Url = string
type Urls = string[]

interface RawProviderURLMap {
    provider: Provider,
    url: Urls

    toJSON(): JSON
}

const src = "./providers/"

async function main() {
    const json = await readJSON()
    let providerUrl: Map<Provider, Urls> = new Map<string, string[]>()
    let urlProvider: Map<Url, Provider> = new Map<string, string>()
    
    json.forEach(j => {
        const raw = fs.readFileSync(j, "utf-8")
        const obj: RawProviderURLMap = JSON.parse(raw)
        const provider = obj.provider
        const url = obj.url

        providerUrl.set(obj.provider, obj.url)
        url.forEach(u => urlProvider.set(u, provider))
    })

    // readable? no.
    // doesnt it work? yes.
    const providerUrlJSON = JSON.stringify([...providerUrl])
    const urlProviderJSON = JSON.stringify([...urlProvider])
    fs.writeFileSync("complete_providers.json", providerUrlJSON)
    fs.writeFileSync("complete_urls.json", urlProviderJSON)
    
    // to reconstruct:
    // const mapActual = new Map(JSON.parse(mapJSON))
    // console.log(mapActual)

}

// readJSON reads every json in ./providers
async function readJSON() {
    return fs.readdirSync(src)
    .filter(name => path.extname(name) === ".json")
    .map(name => path.join(src, name))
}

main()