import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Activities
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BTech Undergraduate</h4>
                <h5>TechnoIndia University, Kolkata</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              1st Semester SGPA: 8.95 | 2nd Semester SGPA: 8.25. Active participant in GDG & Vivartha sessions, gaining exposure to marketing trends and tech-driven branding.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 12th & 10th</h4>
                <h5>KendriyaVidyalaya Koliwada (12th) | ShivJyotiInternational (10th)</h5>
              </div>
              <h3>PAST</h3>
            </div>
            <p>
              Represented college in Smart India Hackathon (SIH) demonstrating teamwork, problem-solving, and presentation skills. Participated in various competitions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Workshops & Conferences</h4>
                <h5>Various Tech Clubs & Events</h5>
              </div>
              <h3>EVENTS</h3>
            </div>
            <p>
              Robotics Workshop – BITM. GDG Sessions: AI/ML, Cybersecurity, Web Development, Web3. Daytona Development Club technical sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
