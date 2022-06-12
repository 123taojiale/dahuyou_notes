abstract class Chess {
  x: number = 0;
  y: number = 0;

  abstract readonly name: string;
  move(targetX: number, targetY: number): boolean {
    this._isOutSide();
    this._targetHasAlly();
    if (!this.rule(targetX, targetY)) return false;
    this._finishMove(targetX, targetY);
    return true;
  }

  private _isOutSide(): boolean {
    console.log("1. 边界判断");
    return false;
  }

  private _targetHasAlly(): boolean {
    console.log("2. 目标位置是否存在己方棋子");
    return false;
  }

  private _finishMove(targetX: number, targetY: number): boolean {
    this.x = targetX;
    this.y = targetY;
    console.log(`${this.name}移动成功`);
    return true;
  }

  protected abstract rule(targetX: number, targetY: number): boolean;
}

class Knight extends Chess {
  protected rule(targetX: number, targetY: number): boolean {
    console.log("3. 棋子移动规则判断");
    return true;
  }
  readonly name: string = "马";
}

class cannon extends Chess {
  protected rule(targetX: number, targetY: number): boolean {
    console.log("3. 棋子移动规则判断");
    return true;
  }
  readonly name: string;

  constructor() {
    super();
    this.name = "炮";
  }
}

class Pawn extends Chess {
  protected rule(targetX: number, targetY: number): boolean {
    console.log("3. 棋子移动规则判断");
    return true;
  }
  get name() {
    return "兵";
  }
}

class King extends Chess {
  name: string = "将";
  protected rule(targetX: number, targetY: number): boolean {
    console.log("3. 棋子移动规则判断");
    return true;
  }
}
