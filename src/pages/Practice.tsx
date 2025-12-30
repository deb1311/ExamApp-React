import React from 'react';
import '../styles/Practice.css';

const Practice: React.FC = () => {
  return (
    <div className="practice-container">
      <header className="practice-header">
        <div className="header-title">
          <h2>Good Evening</h2>
          <p>Focus mode active</p>
        </div>
        <div className="streak-container">
          <p>
            <span className="text-orange-500 text-sm">🔥</span> 5 Day Streak
          </p>
        </div>
      </header>

      <main className="practice-main">
        <div className="blur-background"></div>
        <div className="start-practice-container">
          <div className="pulse-animation"></div>
          <button className="start-practice-button">
            <div className="start-practice-content">
              <span className="material-symbols-outlined">bolt</span>
              <span>Start Practice</span>
            </div>
            <span>Random Mix • High Yield PYQs</span>
          </button>
        </div>

        <div className="practice-description">
          <p>Dive straight into questions. No planning, just practice.</p>
        </div>

        <div className="create-test-container">
          <button className="create-test-button">
            <span className="material-symbols-outlined">timer</span>
            <span>Create Test (Test Mode)</span>
          </button>
        </div>

        <div className="resume-session-container">
          <div className="resume-session-card">
            <div className="resume-session-icon">
              <span className="material-symbols-outlined">history</span>
            </div>
            <div className="resume-session-details">
              <p>Resume Session</p>
              <p>Rotational Motion (Q. 14)</p>
            </div>
            <div className="resume-session-arrow">
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          </div>
          <button className="view-performance-button">
            View Performance Analysis
          </button>
        </div>
      </main>

      <nav className="bottom-nav">
        <button className="nav-button active">
          <div className="nav-icon-container">
            <span className="material-symbols-outlined">edit_square</span>
            <span className="ping-animation"></span>
            <span className="dot-animation"></span>
          </div>
          <span>Practice</span>
        </button>
        <button className="nav-button">
          <span className="material-symbols-outlined">assignment</span>
          <span>Tests</span>
        </button>
        <button className="nav-button">
          <span className="material-symbols-outlined">bar_chart</span>
          <span>Stats</span>
        </button>
      </nav>
    </div>
  );
};

export default Practice;
