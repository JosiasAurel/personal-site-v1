---
title: Stackblitz Got Me!
tags: [Web, Performance, Innovation]
date: 22/05/2021
og: https://og-image-delta-one.vercel.app/Stackblitz%20Got%20Me%20Here%20%3A%20Web%20Containers.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fraw.githubusercontent.com%2FJosiasAurel%2FJosiasAurel%2Fmaster%2FScreenshot_2021-05-01-14-35-58-0369650772-removebg-preview.png
---

# Stackblitz Got Me Here : Web Containers

The web is such a developed platform.

Last morning when i woke up, i went through my news feed and one post really got my attention. If you have ever developed an app for the web, you might have heard of NodeJS which is essentially a _JavaScript runtime_ off the browser. NodeJS is based on V8, a javascript engine made by Google and some OSS contributors.

Now NodeJS runs out of the browser which is cool because it allows us to write backend services and close-to-native apps with javascript knowledge, which is a huge benefit for web developers.

Stackblitz is now bringing NodeJS back to the browser 🤯. What a thing! But how ? You might ask.

## How ?!

They are making use of WASM.

> WASM (Web ASseMbly) : Basically a way to run machine code in a stack-based vitual machine straight in the browser, without having to deal with native Os quirks.

The hype of WASM has caused alot of shaking in the developers ecosystem and it provides access to lots of capabilities and APIs, helping us developers build apps that are fast and have _near native_ and predictable performance.

Stackblitz envision making use of this browser technology to provide a way for developers to create software right in the browser and eliminate the need for local environments or remote services.

The stackblitz team along with the _@googlechrome_ and _vercel's NextJS_ team have worked in stealth on this project for 2 years and named this technology '_Web Containers_'.

## WebContainers are cool 😎

Unlike other services like Repl, GitPod, Codesandbox and the like which rely on remote servers for processing, Web Conatiners don't.
The downside of Repls and the like is that they rely on a response from remote machine somewhere in the world and internet connectivity - which can sometimes be a big issue.

WebContainers removes these downsides by running straight into your browser without relying on remote server.

They are :

- Faster
- Secure
- In-browser debugging
- We won't get a black hole size _node_modules_ folder

## Develop faster, safer and happier 😁

WebContainer are easy to startup and are fast to setup with a few *npm install*s.

WebContainers are way more secure than our local development environment as they run in browser security sandbox.

### Build and Run servers

Yeah you got it right, you can run servers in there.
Such is acheived by a virutalized network stack in the browser with service workers doing the job.

### You can work offline 🥳

In my opinion, one of the biggest strenght of WC is the ability to work offline after the environment is loaded. It makes so much sense!
Network connectivity is still an issue these days with ISPs that go down and sometimes their $hitty connections!

### So fast so good

Bye bye node_modules - they do not depend on server resources

## How do they work ?

The project is not open source... yet!
They have not provided much information about how this works - still trying to reverse engineer it but here is what i can tell you.

- They rely on service workers and current browser APIs like _File System API_ too.
- They use some engine worker and service worker where they establish their virtualized network stack
- They are making use of WASM for some parts - to deal with building and most parts requiring much performance
- The environment is PWA -> a huge benefit making it easy to work offline - all the resources are 'cached'

- They are simply awesome, wanna see a demo ? I just gave it a try, see me playing with small node logs [here](https://twitter.com/JosiasWing/status/1395913263435685889?s=20) lol

Wanna see [another one](https://blog.stackblitz.com/img/v2/1.webp) ?

You have reached the end ! I just feel so much hype about this. This is one step foward to improvement and i think this might help alot.

I will be playing around with emscripten and WASM to try a similar thing and take gaming to the next level but no guarantee tho ;)

Thanks for reading.
