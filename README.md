Демонстрация расчета стоимости полиса ВЗР
=========================================

Реализация с использованием механизма принятия решения Camunds DMN.
* Запрос: Rest service HTTP+ BODY JSON
* Ответ: application/json

Что в проекте: 
-------------
* vzr-rule.dmn -  DMN - правила принятия решения (расчета)
* test-rule.js - тестовый запрос(ы)
* docker-compose.yaml - запуск camunda-server в docker контейнере

как запустить demo:
-------------------
- cd docker-camunda
- docker-compose up - старт камунда сервер
- можно просмотреть админку http://[ip-address-server]:8080/camunda-welcome (demo/demo)
- ./deploy-rules.sh - загрузить правила на сервер

тестирование:
-------------
- установить  nodejs
- npm install - установка доп модулей
- node test-rules - вызов правила
- через админку просмотреть все результаты

Как смотреть и редактировать правила
------------------------------------
- установить Camunda-modeler
- открыть файл vzr-rules.dmn

Правила написаны на основе методички страховой компании, число правил и ряд коэффициентов искажены, суть приципов расчета сохранена




