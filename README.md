This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
对于这个阶段里面，eslint 是本身配置的，按照插件，然后配置环境 npm add eslint -D
{
"extends": ["next/core-web-vitals", "next/typescript"]
}
这个是 eslint 的官方的校验
npm add stylelint stylelint-config-standard-scss -D
官方校验
{
"extends": "stylelint stylelint-config-standard-scss"
}

stylelint 对于 css 样式代码格式化
prettier 格式化代码的
vscode-icons  让vscode的图标更加好看的

还需要打开两个设置
Format On Save 和 Code Actions On Save  
{
"explorer.confirmDragAndDrop": false,
"cursorcode.prompt": "",
"explorer.confirmDelete": false,
"editor.codeActionsOnSave": {
"source.fixAll.stylelint": true
},
"editor.formatOnSave": true
}
安装 mockjs
npm add mockjs
nom add @types/mockjs -D
