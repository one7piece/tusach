import 'package:flutter/material.dart';

class Result extends StatelessWidget {
  final int _totalScore;
  final Function _resetHandler;
  Result(this._resetHandler, this._totalScore);

  String get resultPhrase {
    var resultText = 'You did it';
    if (_totalScore <= 8) {
      resultText = 'you are awesome';
    } else if (_totalScore <= 12) {
      resultText = 'you are great';
    }
    return resultText;
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Center(
            child: Text(
          resultPhrase,
          style: TextStyle(fontSize: 36, fontWeight: FontWeight.bold),
          textAlign: TextAlign.center,
        )),
        FlatButton(
          child: Text('Restart Quiz'),
          color: Colors.blue,
          onPressed: _resetHandler,
        ),
      ],
    );
  }
}
