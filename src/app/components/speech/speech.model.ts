interface IDate {
  day?: string,
  month?: string,
  year?: string
}
export class Speech {
  title: String;
  author: String;
  subject: String;
  content: String;
  createdAt: Date;
  isShared: boolean;
  date: IDate;
  constructor(title?: String, author?: String) {
    this.title = title;
    this.author = author;
  }
};
