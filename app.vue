<template>
	<div>
		<header>
			<GradientHeader />
			<div id="toggle">
				<div :class="['toggle', { 'toggle--on': isOn }]" @click="toggle">
					<div class="toggle__circle"></div>
				</div>
			</div>
			<div class="container-header">
				<div class="flex-box-header">
					<div class="text-block">
						<h1>Sagmanov Akhmatnur</h1>
						<p>Front-End Developer · UI/UX Designer</p>
					</div>
					<div class="intro-preview">
						<div class="img-overlay"></div>
						<picture>
							<source srcset="/public/images/temhan.avif" type="image/avif" />
							<source srcset="/public/images/temhan.webp" type="image/webp" />
							<img src="/public/images/temhan.png" alt="" />
						</picture>
					</div>
				</div>
			</div>
		</header>
		<main>
			<section class="contact">
				<div class="contact-header">
					<a class="location" href="https://maps.app.goo.gl/mnKecQ7GrGfmF3vS8">
						<img class="icon" src="/public/images/icons/map-icon.svg" />
						<p>Astana</p>
					</a>
					<a
						class="email"
						href="mailto:example@example.com?subject=Обращение к вам&body=Здравствуйте!"
					>
						<img class="icon" src="/public/images/icons/email-icon.svg" />
						<p>TemhaN2005S@gmail.com</p>
					</a>
				</div>
				<div class="contact-body">
					<div class="socials">
						<a href="#" class="ethernet">
							<img
								class="social-icon"
								src="/public/images/icons/ethernet.svg"
							/>
							<p>TemhaN</p>
						</a>
						<a href="temhan_uwu.t.me" class="telegram">
							<img
								class="social-icon"
								src="/public/images/icons/telegram.svg"
							/>
							<p>@temhan_uwu</p>
						</a>
						<a href="vk.com/temhan" class="vkontakte">
							<img
								class="social-icon"
								src="/public/images/icons/vkontakte.svg"
							/>
							<p>/temhan</p>
						</a>
						<a href="github.com/TemhaN" class="github">
							<img class="social-icon" src="/public/images/icons/github.svg" />
							<p>/temhan</p>
						</a>
					</div>
				</div>
			</section>
			<section class="skills container">
				<h1>Skills</h1>
				<div class="education skills-box">
					<h2 class="skill-name">Education</h2>
					<p class="education-box">
						<span>Kazakhstan</span>— astana polytechnic college
					</p>
				</div>
				<hr />
				<div class="front-end skills-box">
					<h2 class="skill-name">Front End</h2>
					<div class="skills-container">
						<p>HTML</p>
						<p>CSS</p>
						<p>Bootstrap</p>
						<p>Tailwind</p>
						<p>JavaScript</p>
						<p>Vue.js</p>
						<p>Nuxt.js</p>
					</div>
				</div>
				<hr />
				<div class="back-end skills-box">
					<h2 class="skill-name">Back End</h2>
					<div class="skills-container">
						<p>MySQL</p>
						<p>SQL</p>
						<p>JSON</p>
						<p>Laravel</p>
						<p>PHP</p>
						<p>MongoDB</p>
						<p>Python</p>
					</div>
				</div>
				<hr />
				<div class="skills-tools skills-box">
					<h2 class="skill-name">Skills & Tools</h2>
					<div class="tools-box">
						<div class="softwares">
							<h2 class="skill-name">Tools & Softwares</h2>
							<div class="tools-container">
								<h2 class="tools-name">Code related</h2>
								<div class="skills-container">
									<p>VS Code</p>
									<p>Node.js</p>
									<p>Git</p>
									<p>Yarn</p>
								</div>
							</div>
							<div class="tools-container">
								<h2 class="tools-name">Designer related</h2>
								<div class="skills-container">
									<p>Figma</p>
									<p>Photoshop</p>
									<p>Illustrator</p>
								</div>
							</div>
							<div class="tools-container">
								<h2 class="tools-name">3D related</h2>
								<div class="skills-container">
									<p>Blender</p>
									<p>Cinema 4D</p>
								</div>
							</div>
						</div>
						<div class="office">
							<h2 class="skill-name">Office</h2>
							<div class="tools-container">
								<h2 class="tools-name">Microsoft Office</h2>
								<div class="skills-container">
									<p>Word</p>
									<p>Excel</p>
									<p>PowerPoint</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div class="projects container">
				<div class="project-box">
					<a class="project-link">
						<span>Fusion</span> Это и административная панель для веб-сайта с
						фильмами, и нечто большое.
					</a>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import GradientHeader from '@/components/GradientHeader.vue';

export default {
	name: 'toggle',
	components: {
		GradientHeader,
	},
	data() {
		return {
			isOn: false,
		};
	},
	methods: {
		toggle() {
			this.isOn = !this.isOn;
		},
	},
};
</script>
