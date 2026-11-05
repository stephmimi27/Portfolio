import {
  profile,
  about,
  experience,
  projects,
  interests,
  books,
  places,
  education,
} from '../data/portfolio.js';

export default function PlainPortfolio() {
  const placeNames = places.map((place) => place.name);
  const travelSummary = `${placeNames.slice(0, -1).join(', ')} and ${placeNames.at(-1)}.`;

  return (
    <main className="plain-wrap">
      <section style={{ marginTop: 0 }}>
        <h1>{profile.name}</h1>
        <p className="p-tag">{profile.plainTagline}</p>
        <p className="p-meta">
          {profile.email} &nbsp;·&nbsp; {profile.linkedIn}
        </p>
      </section>
      <section id="about">
        <h2>About</h2>
        {about.plain.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <section id="experience">
        <h2>Experience</h2>
        {experience.map((item) => (
          <div className="item" key={item.id}>
            <div className="row">
              <span className="role">{item.role}</span>
              <span className="dates">{item.dates}</span>
            </div>
            <div className="org">{item.organization}</div>
            <ul>
              {item.plainBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section id="education">
        <h2>Education</h2>
        <div className="item">
          <div className="row">
            <span className="role">{education.school}</span>
            <span className="dates">{education.year}</span>
          </div>
          <div className="org">{education.degree}</div>
          <ul>
            {education.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        {projects.map((project) => (
          <div className="item" key={project.id}>
            <div className="role">{project.name}</div>
            <p>{project.plainDescription}</p>
          </div>
        ))}
      </section>
      <section id="interests">
        <h2>Interests</h2>
        <ul>
          {interests.map((interest) => (
            <li key={interest.title}>{interest.plainTitle}</li>
          ))}
        </ul>
      </section>
      <section id="reading">
        <h2>Reading</h2>
        <ul>
          {books.map((book) => (
            <li key={book.title}>
              {book.title}, {book.author}
            </li>
          ))}
        </ul>
      </section>
      <section id="travel">
        <h2>Travel</h2>
        <p>{travelSummary}</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>
          {profile.email}
          <br />
          {profile.linkedIn}
        </p>
      </section>
    </main>
  );
}
