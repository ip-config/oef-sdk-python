#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# ------------------------------------------------------------------------------
#
#   Copyright 2018 Fetch.AI Limited
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
#
# ------------------------------------------------------------------------------


"""
A short script that show how an agent can register/unregister to the OEF.
"""
from oef.schema import Description

from oef.agents import OEFAgent

if __name__ == '__main__':
    agent = OEFAgent("agent_1", oef_addr="127.0.0.1", oef_port=3333)

    agent.connect()
    print("Agent successfully connected.")

    agent.register_agent(Description({}))
    print("Agent registered to the OEF Node.")

    agent.unregister_agent()
    print("Agent {} unregistered".format(agent.public_key))

