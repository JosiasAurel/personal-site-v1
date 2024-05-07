---
title: Install VSCode on an Android Phone
date: 29/05/2020
tags: [Android, Development, Tooling]
og: none
---

Hey guys. Today i am going to show you how to install
VSCode on android. If you read my [previous post](https://dev.to/josiasaurel/how-to-install-vscode-on-android-5f8d),
you probably have it working. In this new post i am going to
show you how to install VSCode without having to install a
linux distro in termux. We are going to use barebones termux
and some additional packages.

Let's Start

First thing is to install [termux](https://play.google.com/store/apps/details?id=com.termux)

Once you have that installed, we can proceed to the next steps

Install NodeJS in termux with the following command

```shell
$ pkg install nodejs
```

Termux is going to install NodeJS and npm. If any question is asked during the installation, accept it.

Next we are going to install [yarn pkg](https://yarnpkg.com/) and then use it to install code-server

Run the below commands

```shell
$ npm i -g yarn
```

The above will install yarn

```shell
$ yarn global add code-server
```

The above command will install code-server globally in your system.

Now you may ask why we did not directly use `npm` to install code-server
The reason is i have encoutered issues when installing it through npm, in fact, it did mot work at all.

If you have gone through the above steps, you can now launch `code-server` anywhere in your terminal by typing

```shell
$ code-server
```

It will launch and give you a link you can open in your browser. You can optionally add it to your home screen if you are using chrome.

Each time you launch it, you'll be asked for a password which is found in a config file in termux `HOME`
