document.write(`<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="author" content="Raffy27">
		<title>Pwned</title>
		<style>
			*,
			*::after,
			*::before {
			  margin: 0;
			  padding: 0;
			  box-sizing: border-box;
			}

			html {
			  font-size: 62.5%;
			}

			body {
			  --light: hsl(0, 0%, 100%);
			  --background: linear-gradient(to right bottom, hsl(236, 50%, 50%), hsl(195, 50%, 50%));

			  display: flex;
			  flex-direction: column;
			  justify-content: center;
			  align-items: center;

			  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', sans-serif;

			  min-height: 100vh;
			  background: #263238;
			}

			a,
			a:link {
			  font-family: inherit;
			  text-decoration: none;
			  color: white;
			}

			.modal-container {
			  position: fixed;
			  top: 0;
			  left: 0;
			  z-index: 10;

			  display: none;
			  justify-content: center;
			  align-items: center;

			  width: 100%;
			  height: 100%;

			  background: hsla(0, 0%, 40%, .6);
			}

			/* using :target */
			.modal-container:target {
			  display: flex;
			}

			.modal {
			  width: 60rem;
			  padding: 4rem 2rem;
			  border-radius: .8rem;

			  color: var(--light);
			  background: var(--background);
			  box-shadow: .4rem .4rem 2.4rem .2rem hsla(236, 50%, 50%, 0.3);
			  position: relative;

			  overflow: hidden;
			}

			.modal__details {
			  text-align: center;

			  margin-bottom: 4rem;
			  padding-bottom: 4rem;
			  border-bottom: 1px solid hsla(0, 0%, 100%, .4);
			}

			.modal__title {
			  font-size: 3.2rem;
			}

			.modal__description {
			  margin-top: 2rem;

			  font-size: 1.6rem;
			  font-style: italic;
			}

			.modal__text {
			  padding: 0 4rem;
			  margin-bottom: 4rem;

			  font-size: 1.6rem;
			  line-height: 2;
			}

			.modal__text::before {
			  content: '';

			  position: absolute;
			  top: 0%;
			  left: 100%;
			  transform: translate(-50%, -50%);

			  width: 18rem;
			  height: 18rem;
			  border: 1px solid hsla(0, 0%, 100%, .2);
			  border-radius: 100rem;

			  pointer-events: none;
			}

			.modal__btn {
			  padding: 1rem 1.6rem;
			  border: 1px solid hsla(0, 0%, 100%, .4);
			  border-radius: 100rem;

			  color: inherit;
			  background: transparent;
			  font-size: 1.4rem;
			  font-family: inherit;
			  letter-spacing: .2rem;

			  transition: .2s;
			  cursor: pointer;
			}

			.modal__btn:hover,
			.modal__btn:focus {
			  border-color: hsla(0, 0%, 100%, .6);
			  transform: translateY(-.2rem);
			}

			.link-1 {
			  font-size: 1.8rem;

			  color: var(--light);
			  background: var(--background);
			  box-shadow: .4rem .4rem 2.4rem .2rem hsla(236, 50%, 50%, 0.3);
			  border-radius: 100rem;
			  padding: 1.4rem 3.2rem;

			  transition: .2s;
			}

			.link-1:hover,
			.link-1:focus {
			  transform: translateY(-.2rem);
			  box-shadow: 0 0 4.4rem .2rem hsla(236, 50%, 50%, 0.4);
			}

			.link-2 {
			  width: 4rem;
			  height: 4rem;
			  border: 1px solid hsla(0, 0%, 100%, .4);
			  border-radius: 100rem;

			  color: inherit;
			  font-size: 2.2rem;

			  position: absolute;
			  top: 2rem;
			  right: 2rem;

			  display: flex;
			  justify-content: center;
			  align-items: center;

			  transition: .2s;
			}

			.link-2::before {
			  content: '×';

			  transform: translateY(-.1rem);
			}

			.link-2:hover,
			.link-2:focus {
			  border-color: hsla(0, 0%, 100%, .6);
			  transform: translateY(-.2rem);
			}
		</style>
	</head>
	<body>
		<a href="#modal-opened" class="link-1" id="modal-closed">Mi történt?</a>

		<div class="modal-container" id="modal-opened">
			<div class="modal">

				<div class="modal__details">
					<h1 class="modal__title">XSS</h1>
					<p class="modal__description">A PicNode jelenlegi verziója sajnos több helyen is sebezhető.<br>10/11/2020</p>
				</div>

				<p class="modal__text">Amit itt látsz, az egy egyszerű Cross-Site Scripting sebezhetőség eredménye. Bárki módosíthatja az oldal tartalmát, munkameneteket lophat, és átverheti a felhasználókat.</p>

				<center><a href="https://github.com/Raffy27" style="margin-right:20px;"><button class="modal__btn">Rólam</button></a><a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"><button class="modal__btn">OWASP Remediation Guide</button></a></center>

				<a href="#modal-closed" class="link-2"></a>

			</div>
		</div>
	</body>
</html>`);
console.log('Szervusz :D');