import { profile } from '../data/portfolio.js';

export default function ContactLinks({ separator = <br /> }) {
  return (
    <>
      <a href={`mailto:${profile.email}`} onClick={(event) => event.stopPropagation()}>{profile.email}</a>
      {separator}
      <a href={profile.linkedIn} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>{profile.linkedIn}</a>
      {separator}
      <a href={profile.github} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>{profile.github}</a>
    </>
  );
}
