import Image from 'next/image';
import vercelLogo from '~/assets/powered-by-vercel.svg';
import workersLogo from '~/assets/powered-by-workers.png';

export default function Footer() {
	return (
		<footer className="md:pl-12 md:pr-12">
			<div className="flex flex-wrap place-content-center gap-6 md:flex-nowrap md:gap-12">
				<div className="flex basis-full flex-wrap place-content-center place-items-center gap-4 md:basis-auto">
					<a
						className="rounded outline-none focus:ring focus:ring-width-2 focus:ring-blurple"
						href="https://vercel.com/?utm_source=discordjs&utm_campaign=oss"
						rel="external noopener noreferrer"
						target="_blank"
						title="Vercel"
					>
						<Image
							alt="Vercel"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABLCAQAAAA1k5H2AAAAi0lEQVR42u3SMQEAAAgDoC251a3gL2SgmfBYBRAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARCAgwWEOSWBnYbKggAAAABJRU5ErkJggg=="
							height={44}
							placeholder="blur"
							src={vercelLogo}
							width={212}
						/>
					</a>
					<a
						className="rounded outline-none focus:ring focus:ring-width-2 focus:ring-blurple"
						href="https://www.cloudflare.com"
						rel="external noopener noreferrer"
						target="_blank"
						title="Cloudflare Workers"
					>
						<Image
							alt="Cloudflare"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABLCAQAAAA1k5H2AAAAi0lEQVR42u3SMQEAAAgDoC251a3gL2SgmfBYBRAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARCAgwWEOSWBnYbKggAAAABJRU5ErkJggg=="
							height={44}
							placeholder="blur"
							priority
							src={workersLogo}
						/>
					</a>
				</div>
				<div className="max-w-max flex grow basis-0 flex-col gap-2 md:basis-auto">
					<div className="text-lg font-semibold">Community</div>
					<div className="flex flex-col gap-1">
						<a
							className="rounded outline-none focus:ring focus:ring-width-2 focus:ring-blurple"
							href="https://discord.gg/djs"
							rel="external noopener noreferrer"
							target="_blank"
						>
							Discord
						</a>
						<a
							className="rounded outline-none focus:ring focus:ring-width-2 focus:ring-blurple"
							href="https://github.com/discordjs/discord.js/discussions"
							rel="external noopener noreferrer"
							target="_blank"
						>
							GitHub discussions
						</a>
					</div>
				</div>
				<div className="max-w-max flex grow basis-0 flex-col gap-2 md:basis-auto">
					<div className="text-lg font-semibold">Project</div>
					<div className="flex flex-col gap-1">
						<a
							className="rounded outline-none focus:ring focus:ring-width-2 focus:ring-blurple"
							href="https://github.com/discordjs/discord.js"
							rel="external noopener noreferrer"
							target="_blank"
						>
							discord.js
						</a>
						<a
							className="rounded outline-none focus:ring focus:ring-width-2 focus:ring-blurple"
							href="https://discord.js.org/docs"
							rel="noopener noreferrer"
							target="_blank"
						>
							discord.js documentation
						</a>
						<a
							className="rounded outline-none focus:ring focus:ring-width-2 focus:ring-blurple"
							href="https://discord-api-types.dev"
							rel="external noopener noreferrer"
							target="_blank"
						>
							discord-api-types
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
