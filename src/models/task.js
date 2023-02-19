class Task {
  constructor(
    name,
    category,
    details,
    startDate,
    endDate,
    userId,
    status = "waiting",
    id
  ) {
    this.name = name;
    this.category = category;
    this.details = details;
    this.startDate = startDate;
    this.endDate = endDate;
    this.userId = userId;
    this.status = status;
    this.id = id;
  }

  async save() {}

  async update() {}

  async delete() {}

  static async read() {}
}

export default Task;
