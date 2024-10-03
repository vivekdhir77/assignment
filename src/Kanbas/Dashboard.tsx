import React from 'react';

import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses"  className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="logo192.png" width="100%" height={160}/>
                <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                </h5>
                <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                </p>
                <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="CN.jpg" width="100%" height={160}/>
                <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                CS4321
                </h5>
                <p className="wd-dashboard-course-title card-text">
                Computer Networks
                </p>
                <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
        </div>


        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="physics.jpg" width="100%" height={160}/>
                <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                CS34
                </h5>
                <p className="wd-dashboard-course-title card-text">
                Physics
                </p>
                <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
        </div>



        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="Chemistry.jpg" width="100%" height={160}/>
                <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                CS222
                </h5>
                <p className="wd-dashboard-course-title card-text">
                Chemistry
                </p>
                <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
        </div>



        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="math.jpg" width="100%" height={160}/>
                <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                CS111
                </h5>
                <p className="wd-dashboard-course-title card-text">
                Maths
                </p>
                <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
        </div>



        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="AI.jpeg" width="100%" height={160}/>
                <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                CS333
                </h5>
                <p className="wd-dashboard-course-title card-text">
                AI
                </p>
                <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
        </div>



        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                    to="/Kanbas/Courses/1234/Home">
                <img src="Crypto.png" width="100%" height={160}/>
                <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">
                CS892
                </h5>
                <p className="wd-dashboard-course-title card-text">
                Cryptography and Network Security
                </p>
                <button className="btn btn-primary"> Go </button>
                </div>
            </Link>
            </div>
        </div>


        </div>
    </div>
    </div>
);
}
