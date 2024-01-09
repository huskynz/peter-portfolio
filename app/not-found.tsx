import { text } from "stream/consumers"
import { ListFormat } from "typescript"

function NotFoundPage() {
	return (
        <div className="text-center">
        <div className="flex justify-center items-center">
                <a href="https://www.husky.nz"><img src="https://serv.husky.nz/logo/HuskyNZRounded.png"  width={150} height={150} alt="HuskyNZ Logo" /></a>
        </div>
        <br />
        <h1 className=" text-9xl">404</h1>
        <p className="text-7xl">Hello You Seem To Be Lost</p>
        <p className="text-4xl">For some fun here are a few things</p>
        <br />
        <br />
        <div className="justify-center items-center grid text-3xl">
            <a href="https://spectrum.liamsherwin.tech/"><img  src="https://serv.husky.nz/spectrum/logo/default.png" width={50} height={50} alt="HuskyNZ Logo"></img></a>

        </div>
        <p className="text-3xl">Spectrum is a cool Realtime node based DMX lighting engine built in godot </p>
        <br />

        <div className="justify-center items-center grid text-3xl">
           <a href="https://filmclub.tech"> <img  src="https://raw.githubusercontent.com/rollestoncollege/logos/main/logos/dark/logo128.png" width={50} height={50} alt="HuskyNZ Logo"></img> </a>

        </div>
        <p className="text-3xl">Rolleston College Film club has taught me alot and has been alot of fun to be apart of</p>
        <br />
        <div className="justify-center items-center grid text-3xl">
        <a href="https://finn.nz?from=HuskyNZ"><img  src="https://serv.hnz.li/finn/finvertround.png" width={50} height={50} alt="HuskyNZ Logo"></img></a>

        </div>
        <p className="text-3xl">Finn is a cool guy he fixes my spelling becuase im still getting good</p>
        <br />
        <div className="justify-center items-center grid text-3xl">
       <a href="https://liamsherwin.tech/?from=HuskyNZ"> <img  src="https://serv.husky.nz/lime/lime1.png" width={50} height={50} alt="HuskyNZ Logo"></img></a>

        </div>
        <p className="text-3xl">Liam is a cool dude that has build some cool apps like spectrum</p>
        <br />
          <div className="justify-center items-center grid text-3xl">
        <a href="https://cloudflare.com"><img  src="https://cf-assets.www.cloudflare.com/slt3lc6tev37/7bIgGp4hk4SFO0o3SBbOKJ/546b2df59d9ef1ac226d70c40b17d019/Cloudflare-logo-transparent-v-rgb_thumbnail.png" width={100} height={100} alt="HuskyNZ Logo"></img></a>

        </div>
        <p className="text-3xl">Cloudflare powers most of the sites that I build</p>
        <br />


        <br></br>
        <br></br>
        <br />


        </div>
    );
}

export default NotFoundPage