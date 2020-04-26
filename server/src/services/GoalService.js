const MongoDbRepo = require('../repository/mongoDbRepository');

class GoalService {
  constructor() {
    this.GoalRepository = new MongoDbRepo('Goals');
  }

  getAllGoals() {
    return this.GoalRepository.getAll();
  }

  updateGoal(_id, opt) {
    return this.GoalRepository.updateOne(_id, opt);
  }

  deleteGoal(_id) {
    return this.GoalRepository.deleteOne(_id);
  }

  createGoal(opt) {
    return this.GoalRepository.create(opt);
  }
}

module.exports = GoalService;
