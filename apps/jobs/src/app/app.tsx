import bgImg from './page-banner.jpg';
import { TopNavigation } from '@behance-frontend-clone/ui';

export function App() {
  return (
    <div>
      <TopNavigation variant='transparent' />
      <div>
        <div
          style={{ backgroundImage: `url(${bgImg})` }}
          className="pt-[110px] pb-[35px] relative min-h-[270px] flex flex-col bg-repeat bg-cover bg-center
          after:bg-[rgba(0,0,0,.45)] after:h-full after:w-full after:absolute after:top-0"
        >
          <h1 className="primary-test-font flex mb-[15px] mt-[2px] items-center justify-center w-full text-white text-[65px] font-bold z-[2] leading-none">
            Creative Jobs
          </h1>
          <p className="primary-test-font text-[22px] flex pb-[35px] text-white z-[2] font-medium items-center justify-center leading-[1.18]">
            Discover your next career move, freelance gig, or internship
          </p>
        </div>
        <div className="h-60">Hello</div>
        <div className="h-60">Hello</div>
        <div className="h-60">Hello</div>
        <div className="h-60">Hello</div>
        <div className="h-60">Hello</div>
        <div className="h-60">Hello</div>
      </div>
    </div>
  );
}

export default App;
