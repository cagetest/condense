# condense

**ConDeNSe** matches a given common CDN domain with its provider.

~~I'll show myself out~~

Inspired by TurboBytes' [cdnfinder](https://github.com/turbobytes/cdnfinder), this repo aims to provide additional lists of common CDN CNAME records and enables faster reconnaissance during web penetration testing.

## Mappings

CNAME mappings are located under `/provider` folder as JSONs. Each file is named after the CDN provider. The content follows the following structure:

```Typescript
{
    "provider": "", // CDN provider name
    "url": [""]     // list of CNAME domains used by the provider
}
```

## Install

```bash
npm -i
tsc && npm index.js
```

The script outputs two files, namely `complete_providers.json` and `complete_urls.json`, that associates CDN providers with a list of domains, and a CDN domain with the provider name, respectively.

## Disclaimer

Most of these provider JSONs are sourced from the internet and various blog posts. Some of them may be inaccurate, some may no longer work, some may not have ever worked. Please do submit an issue and/or pull request had you find more CDN/domains.
