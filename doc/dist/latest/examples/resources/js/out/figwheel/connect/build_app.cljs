(ns figwheel.connect.build-app (:require [antizer-examples.app] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "app", :websocket-url "ws://localhost:3451/figwheel-ws"})

