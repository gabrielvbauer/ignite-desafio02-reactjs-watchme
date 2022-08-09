import { Button } from "./Button";

import { GenreResponseProps } from "../App";

import '../styles/sidebar.scss';

type SideBarProps = {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onClickButton: (id: number) => void;
}

export function SideBar({genres, selectedGenreId, onClickButton}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}