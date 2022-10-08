# Shortener

Shortener es una aplicacion web para acortar tus url, como paginas como [Bit.ly](https://bitly.com/)

## Instalación

Usando el paquete [npm](https://www.npmjs.com/) para instalar Shortener.

```bash
npm install
```
Usando el paquete [yarn](https://yarnpkg.com/).

```bash
yarn install
```

## Endpoints - Api

```bash
 # [POST] - https://short-0j0q.onrender.com/ -> y recibe por body { url: 'http://example.com' }
 # [GET] - https://short-0j0q.onrender.com/:IdUrlShort -> recibe por params el id, y todo junto te redirecciona a la url original
```

## Deployment
[BACKEND](https://short-0j0q.onrender.com/) - Api que se consume para realizar el acortamiento de url \
[FRONTEND](https://shortenerweb.vercel.app/)
