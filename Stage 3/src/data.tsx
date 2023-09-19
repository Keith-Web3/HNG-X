const images = [
  {
    img: 'https://images.unsplash.com/photo-1613682596280-b759eaa406a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHw3fHxzcGlkZXJzfGVufDB8fHx8MTY5Mjc0MDg4OXww&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'L34n}Xxv00IUI=jZxGbI8_Rj.8%M',
    tag: 'animal',
  },
  {
    img: 'https://images.unsplash.com/photo-1617443664906-a1a79bd4f348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHw5fHxjcmF6eSUyMGpva2VyfGVufDB8fHx8MTY5Mjk3MDYzMHww&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'LE9jiag29tIB0MRQ$%o}smxtozs,',
    tag: 'smile',
  },
  {
    img: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHwzfHxwcmVzZW50YXRpb258ZW58MHx8fHwxNjkzMjIzNzM4fDA&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'LPEyrgXoDgMbMvM_bc%NMwITxvx^',
    tag: 'smile',
  },
  {
    img: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHwzfHxjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTY5NDQ1Njc5M3ww&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'LlK1j[~qR.o#RiIUV?t7bIj]WAae',
    tag: 'collaboration',
  },
  {
    img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHwyfHxjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTY5MzU1NDg4MHww&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'LUM@7d005ANHyDMx9GbwNd%NxZxa',
    tag: 'hands',
  },
  {
    img: 'https://images.unsplash.com/photo-1569406125624-98ee19b01d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHwxMXx8Y29sbGFib3JhdGlvbnxlbnwwfHx8fDE2OTMyMjM3MzN8MA&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'LHDvikwb?Ze.=;%0xWt602%KMyaf',
    tag: 'collaboration',
  },
  {
    img: 'https://images.unsplash.com/photo-1492366254240-43affaefc3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHw3fHxjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTY5MzIyMzczM3ww&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'L88z=P%M9FWB~qxuRjayWBj]t7ay',
    tag: 'collaboration',
  },
  {
    img: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHw2fHxjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTY5MzIyMzczM3ww&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'LEEL$%oh57of?uw{V@s.DNoIozoe',
    tag: 'collaboration',
  },
  {
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHwxMHx8Y29sbGFib3JhdGlvbnxlbnwwfHx8fDE2OTMyMjM3MzN8MA&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'LWEMB]NzX:M|%fWWa~M|4mxAn2R%',
    tag: 'hands',
  },
  {
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHw4fHxjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTY5MzIyMzczM3ww&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'LNMtBb00_49a=_VsNeM{=|tRE1.8',
    tag: 'collaboration',
  },
  {
    img: 'https://images.unsplash.com/photo-1601987077677-5346c0c57d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHwyfHxkcmFnb258ZW58MHx8fHwxNjkzMjU4NjgxfDA&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'L34LOKof4mWB%gj[IUayD%WV%Mj[',
    tag: 'animal',
  },
  {
    img: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHwzfHxSb2NrZXR8ZW58MHx8fHwxNjkzMjU4ODE0fDA&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'LSHB}HDh0L%2Ae-nxCWU4.-:?GV@',
    tag: 'launch',
  },
  {
    img: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODE5MjF8MHwxfHNlYXJjaHw0fHxjb2xsYWJvcmF0aW9ufGVufDB8fHx8MTY5MzI5MTIyNHww&ixlib=rb-4.0.3&q=80&w=1080',
    blurhash: 'L7By~hRQ5OozB_M|-qbE2,Myr@s:',
    tag: 'together',
  },
]

export default images
