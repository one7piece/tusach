import 'package:flutter/material.dart';
import 'answer.dart';
import 'question.dart';

class Quiz extends StatelessWidget {
  final List<Map<String, Object>> questions;
  final int questionIndex;
  final Function answerQuestion;
  Quiz({@required this.questions, @required this.questionIndex,
      @required this.answerQuestion});
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Question(questions[questionIndex]['questionText']),
      // spread-operator (...): take a list and pull a items from a list
      // and add them to the
      ...(questions[questionIndex]['answers'] as List<Map<String, Object>>).map((answer) {
        return Answer(() => answerQuestion(answer['score']), answer['text']);
      }).toList(),
    ]);
  }
}
