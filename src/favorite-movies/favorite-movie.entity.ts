import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FavoriteMovie {
  @PrimaryGeneratedColumn('uuid')
  movie_id: string;

  @Column()
  original_title: string;

  @Column()
  poster_path: string;
}
