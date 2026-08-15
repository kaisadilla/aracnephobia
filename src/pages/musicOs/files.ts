export type FileType = 'broken'
  | 'folder'
  | 'playlist'
  | 'bug'
  | 'witch'
  | 'coven'
  | 'wish'
  | 'contact';

export interface BrokenFile {
  type: 'broken';
  name: string;
}

export type File = BrokenFile;

function broken (name: string) : BrokenFile {
  return { 
    type: 'broken',
    name,
  };
}

const FILES = [
  broken("THE//MASK"),
  broken("THE//RAGE"),
  broken("THE//HEART"),
  broken("THE//ROPE"),
]

export default FILES;
