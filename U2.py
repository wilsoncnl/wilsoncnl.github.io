###############################################
#          Import some packages               #
###############################################
from flask import Flask, render_template
from flask_bootstrap import Bootstrap



###############################################
#          Define flask app                   #
###############################################
app = Flask(__name__, template_folder='template')
Bootstrap(app)



###############################################
#      Render Introduction page               #
###############################################
@app.route('/introduction', methods=['GET'])
def get_introduction():
    return(render_template('Introduction.html',))



###############################################
#          Render main page                   #
###############################################
@app.route('/', methods=["GET"])
def get_main():
    return(render_template('main.html'))



###############################################
#          Render DataAnalysis page           #
###############################################
@app.route('/dataanalysis', methods=["GET"])
def get_dataanalysis():
    return(render_template('DataAnalysis.html'))



###############################################
#          Render DataModeling page           #
###############################################

@app.route('/datamodeling', methods=["GET"])
def get_datamodeling():
    return(render_template('DataModeling.html'))



###############################################
#   Render Findings and Evaluation page       #
###############################################
@app.route('/findingsnevaluation', methods=["GET"])
def get_findingsnevaluation():
    return(render_template('FindingsNEvaluation.html'))



###############################################
#          Render Conclusion page             #
###############################################

@app.route('/conclusion', methods=["GET"])
def get_conclusion():
    return(render_template('Conclusion.html'))



###############################################
#                Run app                      #
###############################################
if __name__ == '__main__':
    app.run(debug=False)