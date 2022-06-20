import 'package:flutter/material.dart';
import './quiz.dart';
import './result.dart';

// void main(List<String> args) {
//   runApp(MyApp());
// }
void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return MyAppState();
  }
}

class MyAppState extends State<MyApp> {
  // question variable is const, ie. cannot do questions = new_assignment
  // question value is also const, ie. cannot do question[0] = new_assignment
  static const _questions = const [
    {
      'questionText': 'what\'s your fav color?',
      'answers': [
        {'text': 'Black', 'score': 10},
        {'text': 'Red', 'score': 5},
        {'text': 'Green', 'score': 1}
      ]
    },
    {
      'questionText': 'what\'s your fav animal?',
      'answers': [
        {'text': 'Tiger', 'score': 10},
        {'text': 'Cat', 'score': 5},
        {'text': 'Dog', 'score': 1}
      ]
    },
    {
      'questionText': 'what\'s your fav instructor?',
      'answers': [
        {'text': 'Dung', 'score': 10},
        {'text': 'John', 'score': 5},
        {'text': 'Roger', 'score': 1}
      ]
    },
  ];
  var _questionIndex = 0;
  var _totalScore = 0;
  void _answerQuestion(int score) {
    _totalScore += score;
    print('answer questionIndex: $_questionIndex, total score: $_totalScore');
    // force call widget's build()
    setState(() {
      _questionIndex++;
    });
  }

  void _resetQuestion() {
    print('reset question');
    setState(() {
      _questionIndex = 0;
      _totalScore = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: Text("My First App"),
      ),
      body: _questionIndex < _questions.length
          ? Quiz(
              answerQuestion: _answerQuestion,
              questionIndex: _questionIndex,
              questions: _questions)
          : Result(_resetQuestion, _totalScore),
    ));
  }
}
