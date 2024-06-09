import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BiLogoNetlify } from 'react-icons/bi';
import { Tags } from './Tags';
import { ProjectLink } from './ProjectLink';
export const Card = ({ data }) => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-[0.3fr_0.7fr] lg:gap-3 ">
        <div className="">
          <img
            src={data?.media.url}
            alt={data?.media.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 md:p-1">
          <h1 className="text-xl sm:text-3xl my-3 md:my-0 md:mb-3 text-custom_orange">
            {data.title}
          </h1>
          <div className="my-3">
            <Tags tags={data?.tags} />
          </div>
          <p className=" text-base md:text-lg md:mt-10">{data.description}</p>
          <div className="w-full h-[50px] bg-[url('/statusbar.png')] flex justify-around bg-center bg-origin-content bg-no-repeat bg-cover mt-16">
            <ProjectLink path={data?.links.repo}>
              <FaGithub className="size-10 text-custom_brown" />
              <p className="font-mono">Github</p>
            </ProjectLink>
            <ProjectLink path={data?.links.site}>
              <BiLogoNetlify className="size-10 text-custom_brown" />
              <p className="font-mono">Deployed Link</p>
            </ProjectLink>
          </div>
        </div>
      </div>
    </div>
  );
};
