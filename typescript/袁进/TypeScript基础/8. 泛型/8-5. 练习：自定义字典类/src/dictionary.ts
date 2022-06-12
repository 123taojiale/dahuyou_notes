type callback<T, U> = (key: T, val: U) => void;

export class Dictionary<K, V> {
  private _keys: K[] = [];
  private _vals: V[] = [];

  // 判断是否存在指定 key
  has(key: K) {
    return this._keys.includes(key);
  }

  // 删除指定 key-val
  delete(key: K) {
    const targetIndex = this._keys.indexOf(key);
    if (targetIndex === -1) return;
    this._keys.splice(targetIndex, 1);
    this._vals.splice(targetIndex, 1);
  }

  // 设置 key-val
  set(key: K, val: V) {
    const targetIndex = this._keys.indexOf(key);
    if (targetIndex !== -1) {
      this._vals[targetIndex] = val;
    } else {
      this._keys.push(key);
      this._vals.push(val);
    }
  }

  // 依据指定 key 获取 val
  get(key: K) {
    const targetIndex = this._keys.indexOf(key);
    if (targetIndex === -1) return;
    else return this._vals[targetIndex];
  }

  // 获取键值对的数量
  get size() {
    return this._keys.length;
  }

  forEach(callback: callback<K, V>) {
    for (let i = 0; i < this._keys.length; i++) {
      const k = this._keys[i];
      const v = this._vals[i];
      callback(k, v);
    }
  }
}
