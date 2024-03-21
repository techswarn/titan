import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
export default function Portfolio() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="photo">
            <img
              className="image"
              src="https://backend.nyc3.cdn.digitaloceanspaces.com/profile.jpg"
              alt="profile"
            />
          </div>
          <div className="bio">
            <h2 className="hello">Hello 👋</h2>
            <p>
              <span>My name is Swarn</span>, Working as a Cloud Support Engineer
              at DigitalOcean, where I assist customers in deploying application
              stacks on the App Platform, a serverless PaaS product. My core
              competencies cloud services, Kubernetes, Docker, Linux.
            </p>
            <div className="icons">
              <Link to={`https://github.com/techswarn`}>
                <ion-icon
                  className="icon"
                  size="large"
                  name="logo-github"
                ></ion-icon>
              </Link>
              <Link to={`https://www.linkedin.com/in/swarnsuvarna/`}>
                <ion-icon
                  className="icon"
                  size="large"
                  name="logo-linkedin"
                ></ion-icon>
              </Link>
            </div>
          </div>
        </div>
        <div className="experience">
          <h3>Current experience:</h3>
          <ol>
            <li>
              Troubleshoot build and deployment errors related to Frameworks
              like NodeJS, ReactJS, Laravel, Django, and Golang.
            </li>
            <li>
              Tested customer use cases on the platform and helped resolve
              runtime, build and Database connection errors.
            </li>
            <li>
              Help users deploy serverless functions on Digitalocean serverless
              platforms(FaaS) and help in debugging deployment/ Invocation
              errors.
            </li>
            <li>Troubleshooted third-party API integration issues. </li>
            <li>
              Worked with engineering to debug and trouble UI issues on the App
              platform.
            </li>
            <li>
              Provide support in handling Kubernetes tickets during less
              staffing.
            </li>
            <li>
              I have also Contributed to creating internal documentation for
              debugging Nodejs and PHP runtimes.
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
