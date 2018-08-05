var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = generators.Base.extend({

  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  initializing: function() {
    var message = chalk.bgBlack.bold('\nWelcome to nowcoder & acmcode javascript coding\n') + chalk.underline('github.com/bohexigua\n');
    this.log(yosay(message));
  },

  prompting: function() {
    var done = this.async();
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your dir name',
      default : 'algorithm-problem',
      validate: function(input) {
        if (this.existedFile && this.existedFile.indexOf(input) >
          -1) {
          this.log('目录已存在，请更换一个目录名称！');
          return false;
        } else {
          return true;
        }
      }.bind(this)
    }]).then(function (answers) {
      this.log('dir name', answers.name);
      this.dirname = answers.name;
      done();
    }.bind(this));
  },

  configuring: function() {
  },

  selfFunction: function () {
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('./'),
      this.destinationPath(`./${ this.dirname }/`)
    );
  },

  end: function() {
    this.log('项目创建完成，开始你的JS编程之旅吧！');
  }
});
