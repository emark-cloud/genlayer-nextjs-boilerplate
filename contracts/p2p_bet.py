# v0.1.0
# { "Depends": "py-genlayer:latest" }

from genlayer import *
import typing

class P2PBet(gl.Contract):

    # ----------------------------
    # State variables
    # ----------------------------
    bettor1: str
    bettor2: str
    question: str
    stake1: u256
    stake2: u256
    resolved: bool
    winner: str

    def __init__(self, question: str):
        """
        Initializes a two-player betting contract.
        The first bettor joins via create_bet()
        The second bettor joins via accept_bet()
        """
        self.question = question
        self.bettor1 = ""
        self.bettor2 = ""
        self.stake1 = u256(0)
        self.stake2 = u256(0)
        self.resolved = False
        self.winner = ""

    # ----------------------------
    # Public write-actions
    # ----------------------------

    @gl.public.write
    def create_bet(self, creator: str, stake: u256) -> typing.Dict:
        if self.bettor1 != "":
            return {"error": "Bet already created"}

        self.bettor1 = creator
        self.stake1 = stake

        return {"status": "created", "bettor1": creator}

    @gl.public.write
    def accept_bet(self, joiner: str, stake: u256) -> typing.Dict:
        if self.bettor1 == "":
            return {"error": "No bet exists to accept"}

        if self.bettor2 != "":
            return {"error": "Bet already accepted by another user"}

        self.bettor2 = joiner
        self.stake2 = stake

        return {"status": "accepted", "bettor2": joiner}

    @gl.public.write
    def resolve_bet(self) -> typing.Dict:
        if self.resolved:
            return {"error": "Bet is already resolved"}

       
        prompt = f"""
Answer this question strictly with 'YES' or 'NO':
{self.question}
"""

        ai_answer = gl.nondet.exec_prompt(prompt).strip().lower()

        if "yes" in ai_answer:
            self.winner = self.bettor1
        else:
            self.winner = self.bettor2

        self.resolved = True

        return {
            "winner": self.winner,
            "ai_answer": ai_answer,
            "resolved": True
        }

    # ----------------------------
    # Public view-action
    # ----------------------------

    @gl.public.view
    def get_state(self) -> typing.Dict:
        return {
            "bettor1": self.bettor1,
            "bettor2": self.bettor2,
            "question": self.question,
            "stake1": int(self.stake1),
            "stake2": int(self.stake2),
            "winner": self.winner,
            "resolved": self.resolved
        }
