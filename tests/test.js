const postcss = require('postcss')

let expectedV3 = `
.aspect-w-1 {
    --tw-aspect-w: 1
}
.aspect-w-1::before {
    padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0
}
.aspect-w-1::after {
    content: '';
    display: table;
    clear: both
}
.aspect-w-2 {
    --tw-aspect-w: 2
}
.aspect-w-2::before {
    padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0
}
.aspect-w-2::after {
    content: '';
    display: table;
    clear: both
}
.aspect-h-2 {
    --tw-aspect-h: 2
}
.aspect-w-\\[123\\] {
    --tw-aspect-w: 123
}
.aspect-w-\\[123\\]::before {
    padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0
}
.aspect-w-\\[123\\]::after {
    content: '';
    display: table;
    clear: both
}
.aspect-w-\\[var\\(--width\\)\\] {
    --tw-aspect-w: var(--width)
}
.aspect-w-\\[var\\(--width\\)\\]::before {
    padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0
}
.aspect-w-\\[var\\(--width\\)\\]::after {
    content: '';
    display: table;
    clear: both
}
.aspect-h-\\[123\\] {
    --tw-aspect-h: 123
}
.aspect-h-\\[var\\(--height\\)\\] {
    --tw-aspect-h: var(--height)
}
.aspect-none::before {
    content: none
}
.aspect-none::after {
    content: none
}
`

it('v3', () => {
  let css = postcss([
    require('tailwindcss')({
      content: [
        {
          raw: 'aspect-none aspect-w-1 aspect-w-2 aspect-h-2 aspect-w-[123] aspect-w-[var(--width)] aspect-h-[123] aspect-h-[var(--height)]',
        },
      ],
      plugins: [require('../')],
    }),
  ]).process('@tailwind components').css

  expect(css).toBe(expectedV3.trim())
})

